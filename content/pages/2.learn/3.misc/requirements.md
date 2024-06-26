---
nav_title: Deployment Requirements
---

# TDP Deployment Requirements

## Hardware

The following hardware requirements are given as a reference to reach optimal performance for production-grade Hadoop clusters.

Testing and QA environments share lower configuration requirements.

### Recommended requirements per node type

Bare metal cluster (eg: prod):

| Role   | Qtt | RAM  | CPUs       | Disks                             | NICs      |
| ------ | --- | ---- | ---------- | --------------------------------- | --------- |
| Worker | 5   | 64GB | 16 threads | 2x 500GB RAID 1 (OS+logs)         | 2x10 Gbps |
|        |     |      |            | 6x 2TB JBOD (HDFS)                |           |
| Master | 3   | 64GB | 16 threads | 2x 500GB RAID 1 (OS+logs)         | 2x10 Gbps |
|        |     |      |            | 2x 500GB SSD RAID 1 (HDFS)        |           |
|        |     |      |            | 2x 500GB SSD RAID 1 (RDBMS)       |           |
|        |     |      |            | 2x 500GB SSD RAID 1 (ZooKeeper)   |           |
| Edge   | 2   | 16GB | 4 threads  | 2x 1TB RAID 1 (OS+logs+user data) | 2x10 Gbps |

Note, by thread we mean logical threads and not physical cores.

Virtualized cluster (eg: dev, testing):

| Role   | Qtt | RAM | CPUs      | Disks |
| ------ | --- | --- | --------- | ----- |
| Worker | 2   | 4GB | 2 threads | 30GB  |
| Master | 3   | 6GB | 1 threads | 30GB  |
| Edge   | 1   | 4GB | 1 threads | 5GB   |

TDP compilation host:

| RAM | CPUs      | Disks |
| --- | --------- | ----- |
| 8GB | 4 threads | 50GB  |

### CPU

Depending on your workload, the optimal ration cost/performance is usually achieved on worker nodes with mid-range CPUs. For master nodes, mid-range CPUs with slighly higher performances are good candidates.

### Disks

Sata disks are a popular and cost effective choice offering large storage possibilities. For usecases requiring frequent IO disk access on smaller dataset, SSD is a reasonble alternative. [Heterogeneous storage](https://hadoop.apache.org/docs/r3.1.1/hadoop-project-dist/hadoop-hdfs/ArchivalStorage.html) in HDFS combine multiple types of disks to answer different workloads.

### Asymetric architecture

Asymetric architectures separate storage from compute. HDFS DataNodes are not collocated with YARN NodeManagers. Such architectures provides greater flexibility to scale in and out the hardware independently depending on the usage at the cost of preventing short-circuit optimisations.

Asymetric architecture are known to work but are not tested at the moment with TDP. Thus, they are not yet supported.

## Network

### Cluster isolation and access configuration

It is important to isolate the Hadoop cluster so that external network traffic does not affect the performance of the cluster. In addition, isolation allows the Hadoop cluster to be managed independently from its users, ensuring that the cluster administrator is the only person able to make changes to the cluster configuration.

It is recommended to deploy master and worker nodes inside their own private cluster subnet.

Refer to the Big Data reference architecture of your constructor and stricly respect its recommandations.

#### Single-racks configuration

It is recommanded to place two ToR switches in each rack for high performance and redundancy. Each provides fast uplinks, for example 40GbE, that can be used to connect to the desired network or, in a multi-rack configuration, to another pair of ToR switches that are used for aggregation.

The other ports connect every nodes present inside the rack, commonly with a 10GbE. Each node configures network bonding with two 10 GbE server ports, for up to a max 20 GbE throughput.

#### Multi-racks configuration

The architecture for the multi-rack solution borrows from the single-rack design and extends the existing infrastructure. Each rack is assembled with the same ToR switches connected to a pair of aggregation switches with a fast connection, for example 40GbE.

### DNS

Cluster nodes must be able to resolve all the other cluster nodes using forward and reverse DNS and to connect to all other cluster nodes.

```bash
FQDN='my.domain.com'
IP='10.10.10.10'
dig $FQDN +short | grep -x $IP
dig -x $IP +short | grep -x $FQDN
```

### DNS cache

Caching DNS name resolution and static resolution is beneficial. Be warned, RedHat [discourages the usage of NSCD and SSSD](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system-level_authentication_guide/usingnscd-sssd) conjointly: SSSD is not designed to be used with the NSCD daemon [...] using both services can their usage results in unexpected behavior.

### Internet Access

The machine used for TDP compilation needs full internet access to build the Docker image and download build dependencies (Maven, NPM, Ruby, etc.).

## External services

- KDC
  A Working Kerberos server is required. Popular solutions include ActiveDirectory, FreeIPA and MIT Kerberos server.
- LDAP
  A Working LDAP server is required. Popular solutions include ActiveDirectory, FreeIPA and OpenLDAP.
- RDBMS
  A Working relationnal database is required. Supported solutions include PostgreSQL, MariaDB and MySQL.
- SSL/TLS
  Public and private keys must be provided for each node of the cluster inside a local folder.

### Protocols and Firewalls

Internal connections:

The following network components have to be disabled inside of the cluster:

- IPv6 disabled
- IPTables or nftables backends properly configured or disabled for necessary ports of the TDP components (see [Ports and protocols used by TDP](./ports.md)).

## System

### OS

TDP has been tested using the following operating systems:

- CentOS 7
- Rocky 8
- AlmaLinux 8

## SELinux

SELinux has not been tested in the context of TDP. While theorically possible, activating SELinux is a daunting tasks and will not be supported.

## Service daemons

- SSSD
- Time service
  A clock synchronization service is required to coordinate the system. NTP and chrony are popular services in the Linux eco-system.

### Swap

Turn off disk swappiness or to min=5, for example:

```bash
# Disable VM swappiness
echo '0' > /proc/sys/vm/swappiness
```

#### Limits

The `nofile` limit (max number of opened files) is recommended at `65536`, can be increased to `262144` for processing nodes to prevent file limits problems.

### Partitioning

All cluster nodes must have 1 root partition (`/`) for OS and software. It is recommanded to replicate the system partition, for example using RAID 1.

For worker nodes, each Hadoop dedicated disk should be mounted on a `/data/[0-N]` partitions. Do not use LVM or similar technologies.

### HDFS and YARN disks format

Worker nodes define their storage on multiple JBOD disks. Both HDFS DataNodes and YARN NodeManagers create and manage a directory on each disks. Their configuration impact the overall system performances.

Supported file systems:

- ext3 (not recommanded)
- ext4
- XFS

```bash
mkfs -t ext4 -m 1 -T largefile \
  -O sparse_super,dir_index,extent,has_journal \
  /dev/sdb1
```

Here is some help to interpret the command:

- `T largefile`: one inode per Mb
- `-m 1`: 1% of the blocks reserved for root.
- `sparse_super`: limit the number of superblocks
- `dir_index`: use b_tree index
- `extent`: extent based allocation
- `has_journal`: journaling activation

Read access is optimized by disabling the native Linux optimization to access records metadata. When mounting ext4 and XFS partitions, pass the `notime` flag in `/etc/fstab`:

```bash
/dev/sdb1 /data/1 ext4 defaults,noatime 0 0
```

Call `mount` to apply the changes:

```bash
mount -o remount /data/1
```

Mounting NFS and NAS partitions is not supported to store DataNode directories, even when using asymetric architectures separating storage from compute.

Note, activating the `noexec` flag on `/tmp` mounted partitions causes knows issues and is discouraged.

### Hadoop Users and Groups

TDP create Hadoop users and groups if they do not exist without any control on the UID/GID.

| User                  | Groups                          |
|-----------------------|---------------------------------|
| `hdfs`                | `hdfs`, `hadoop`                |
| `yarn`                | `yarn`, `hadoop`                |
| `mapred`              | `mapred`, `hadoop`              |
| `hbase`               | `hbase`, `hadoop`               |
| `phoenix_queryserver` | `phoenix_queryserver`, `hadoop` |
| `hive`                | `hive`, `hadoop`                |
| `knox`                | `knox`, `hadoop`                |
| `ranger`              | `ranger`, `hadoop`              |
| `spark`               | `spark`, `hadoop`               |
| `zookeeper`           | `zookeeper`, `hadoop`           |

It is recommanded to create the users prior to installation in order to control the UID/GID used and prevent any potential collision with the existing AD/LDAP directory.

## Software

### TDP compilation node

The compilation of TDP is done using a Docker image. The machine used for compilation requires:

- `git`
- `docker-ce`
- `docker-ce-cli`
- `containerd.io`

See [Install Docker Engine on RHEL](https://docs.docker.com/engine/install/rhel/#install-using-the-repository).

The compilation node will need access to the TDP GitHub repositories:

- TDP (Docker image): [https://github.com/TOSIT-IO/TDP]
- Hadoop: [https://github.com/TOSIT-IO/hadoop]
- Hive: [https://github.com/TOSIT-IO/hive]
- Tez: [https://github.com/TOSIT-IO/tez]
- Spark: [https://github.com/TOSIT-IO/spark]
- Ranger: [https://github.com/TOSIT-IO/ranger]
- HBase: [https://github.com/TOSIT-IO/hbase]
- Phoenix: [https://github.com/TOSIT-IO/phoenix]
- Phoenix Query Server: [https://github.com/TOSIT-IO/phoenix-queryserver]
- Knox: [https://github.com/TOSIT-IO/knox]
- HBase-Connectors: [https://github.com/TOSIT-IO/hbase-connectors]
- HBase-Operator-Tools: [https://github.com/TOSIT-IO/hbase-operator-tools]

Access to the official Apache ZooKeeper repo is also needed to download release 3.4.6: [https://archive.apache.org/dist/zookeeper/zookeeper-3.4.6/zookeeper-3.4.6.tar.gz]

### Cluster hosts

The following packages are expected to be installed on all cluster nodes:

- `yum`
- `rpm`
- `scp`
- `tar`
- `vim`
- `java-1.8.0-openjdk`
- `wget`
- `curl`
- `unzip`
- `nmap-ncat`
- `expect`
- `python3`
- `python3-pip`
- `python3-setuptools`
- `python3-virtualenv`
- `python3-lxml`
- `libcgroup-tools`
- `authselect`
- `python2`
- `python3-cryptography`
- `ntp` or `chrony` enabled
- OpenSSL (v1.01, build 16 or later)
- `krb5-workstation`
- `rng-tools`
- `ssh`
- `python 2.7+/3.5+`
- `bind-utils`

Extra packages for the Ansible host:

- `ansible = 2.15.1`
- `jmespath = 1.0.1`
- `passlib=1.7.4`
- `python 2.7+/3.9+`

### Java versions

Oracle JDK 8 and OpenJDK 8 are supported. The YUM package `java-1.8.0-openjdk` is available on RHEL and CentOS system to install OpenJDK.

JDK 7 and lower are not supported. JDK versions 9 and above are not supported.

Some specific versions and version ranges are known to be incompatible with TDP.

The [Hadoop wiki](https://cwiki.apache.org/confluence/display/HADOOP/Hadoop+Java+Versions) lists known versions compatible with the various Hadoop services:

- 1.8.0_242: The visibility of sun.nio.ch.SocketAdaptor is changed from public to package-private. TestIPC#testRTEDuringConnectionSetup is affected.
- 1.8.0_242: Kerberos Java client will fail by "Message stream modified (41)" when the client requests a renewable ticket and the KDC returns a non-renewable ticket. If your principal is not allowed to obtain a renewable ticket, you must remove "renew_lifetime" setting from your krb5.conf.
- 1.8.0_191: All DES cipher suites were disabled. If you are explicitly using DES cipher suites, you need to change cipher suite to a strong one.
- 1.8.0_171: In Apache Hadoop 2.7.0 to 2.7.6, 2.8.0 to 2.8.4, 2.9.0 to 2.9.1, 3.0.0 to 3.0.2, and 3.1.0, KMS fails by java.security.UnrecoverableKeyException due to Enhanced KeyStore Mechanisms. You need to set the system property "jceks.key.serialFilter" to the following value to avoid this error:  
  `java.lang.Enum;java.security.KeyRep;java.security.KeyRep$Type;javax.crypto.spec.SecretKeySpec;org.apache.hadoop.crypto.key.JavaKeyStoreProvider$KeyMetadata;!*"`

[Cloudera](https://docs.cloudera.com/documentation/enterprise/6/release-notes/topics/rg_java_requirements.html) list the following issues:

> - JDK 8u271, JDK 8u281, and JDK 8u291 may cause socket leak issues due to JDK-8245417 and JDK-8256818. Pay attention to the build version of your JDK because some later builds are fixed as described in [JDK-8256818](https://bugs.openjdk.java.net/browse/JDK-8256818).  
    >   Workaround: Consider using a more recent version of the JDK like 8u282, or builds of the JDK where the issue is fixed.
> - JDK 8u40, 8u45, and 8u60 are not supported due to JDK issues impacting CDH functionality:
    >   - JDK 8u40 and 8u45 are affected by JDK-8077155, which affects HTTP authentication for certain web UIs.
>   - JDK 8u60 is incompatible with the AWS SDK, and causes problem with DistCP. For more information, see the KB article.
> - [Oozie Workflow Graph Display](http://gethue.com/improved-oozie-workflow-graph-display-in-hue-4-3/) in Hue does not work properly with JDK versions lower than 8u40.
> - For JDK 8u241 and higher versions running on Kerberized clusters, you must disable referrals by setting sun.security.krb5.disableReferrals=true.

### Databases

For Hive, Oozie and Ranger, the following databases are supported:

| Database   | Supported versions |
| ---------- |--------------------|
| OracleDB   | 19, 12             |
| PostgreSQL | 12, 11             |
| MySQL      | 5.7                |
| MariaDB    | 10.2               |

### Ansible node

The Ansible roles used to deploy TDP are available in the repository [https://github.com/TOSIT-IO/tdp-collection].

## Security

### Kerberos

- TDP currently requires the presence of a KDC and appropriately configured Kerberos clients on each node of the cluster.
- A Kerberos admin principal should exist before any deployment (the admin credentials and realm will be used to automate service principal creation). With an external KDC, the principals an keytabs should be configured in each ansible role and the keytabs should be deployed manually on the corresponding host.
- Kerberos' `krb5.conf` configuration file must be deployed on each host to allow contact the KDC. The default location is `/etc/krb5.conf`. Here is an example with a KDC on the machine `master-01` and the realm `TDP.LOCAL` :

```ini
[libdefaults]
  dns_lookup_realm = false
  ticket_lifetime = 24h
  renew_lifetime = 7d 0h 0m 0s
  forwardable = true
  rdns = false
  pkinit_anchors = FILE:/etc/pki/tls/certs/ca-bundle.crt
  default_realm = TDP.LOCAL
  default_ccache_name = /tmp/krb5cc_%{uid}
  default_client_keytab_name = /home/%{username}/%{username}.keytab
  canonicalize = true

[realms]
  REALM.TDP = {
    kdc = master-01.tdp.local
    admin_server = master-01.tdp.local
    kpasswd_server = master-01.tdp.local
  }

[domain_realm]
  .tdp.local = TDP.LOCAL
```

### Certificate Authority

All external communication are encrypted using SSL/TLS. Deploying certificates is a TDP requirement.

Both signed and unsigned authorities are supported. TDP also supports the usage of intermediate certificates. Wildcard certificates are not supported.

The certificate authority (CA) certificate, the hosts public and private certificates are expected to be deployed on the hosts. The default directory is `/etc/ssl/certs` an can be changed through ansible variable `certs_dir`. Other SSL related variables can be found [here](https://github.com/TOSIT-IO/tdp-collection/blob/master/roles/utils/ssl_tls/defaults/main.yml).

## Additional resources

- [HP Reference Architecture for Hortonworks Data Platform 2.1](https://www.suse.com/partners/alliance/hpe/hp-reference-architecture.pdf)  
  See appendix B: Hadoop cluster tuning/optimization
- [HP Verified Reference Architecture for Hortonworks HDP 2.4 on HP ProLiant DL380 DL380 Gen9 servers](https://d3kex6ty6anzzh.cloudfront.net/uploads/68/681b3b64ad8ec76dbbf77db6460aba0156167b90.pdf)
- [Ready Solutions for Data Analytics, Hortonworks Hadoop 3.0](https://www.delltechnologies.com/asset/ja-jp/solutions/business-solutions/industry-market/h17561-hortonworks-hadoop-v3-ra.pdf) from Dell
- [Cisco UCS Integrated Infrastructure for Big Data and Analytics with Hortonworks Data Platform 3.0](https://www.cisco.com/c/en/us/td/docs/unified_computing/ucs/UCS_CVDs/Cisco_UCS_Integrated_Infrastructure_for_Big_Data_with_Hortonworks_28node.html)