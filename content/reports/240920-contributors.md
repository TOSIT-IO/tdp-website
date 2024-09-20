---
type: contributors
description: |
  Containerizing Vagrant with Ansible for the TDP-dev project.
---

# Notes from September 20th, 2024

Containerizing Vagrant with Ansible for the TDP-dev project.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection-prerequisites#102](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/102): status of "feat: bc missing". PR merged.
- [tdp-collection#853](https://github.com/TOSIT-IO/tdp-collection/pull/853): status of "feat: decommission playbooks". Playbooks to decommission HDFS datanodes and Yarn nodemanagers. PR merged.
- [tdp-observability#111](https://github.com/TOSIT-IO/tdp-observability/pull/111): status of "fix: node-exporter group should be 'node-exporter'". PR merged.
- [tdp-observability#113](https://github.com/TOSIT-IO/tdp-observability/pull/113): status of "feat: Globalize xxx_root_dir default values". PR merged.
- [tdp-website#109](https://github.com/TOSIT-IO/tdp-website/pull/109): status of "feat(reports): contributors' report 240906". PR merged.
- [tdp-collection#876](https://github.com/TOSIT-IO/tdp-collection/pull/876): status of "feat: set postgres as default for metastore". Until now MySQL was set as default DBMS in the collection. PR merged.
- [tdp-getiing-started#311](https://github.com/TOSIT-IO/tdp-getting-started/pull/311): status of "Remove default pg". Linked to PR tdp-collection#876. PR merged.
- [tdp-collection-extras#202](https://github.com/TOSIT-IO/tdp-collection-extras/pull/202). status of "feat: Globalize xxx_root_dir default values". PR merged.
- [tdp-collection-prerequisites#108](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/108): status of "feat: secure ldap rootpw". Removed root password variable and set it into a slapd_password.conf file for security reasons. PR merged.
- [tdp-collection#880](https://github.com/TOSIT-IO/tdp-collection/pull/880): status of "refactor(observability): move observability_targets into tdp". Move targets from the collection observability to the TDP main collection. Test the deployment without the observability collection before merging.

## Open topics

TDP-dev project should not require to have Python installed on the host machine and therefore it cannot have Ansible. At the same time Vagrant should produce the hosts.ini file for Ansible which it does when the ansible-provisioning is enabled. Therefore, we are exploring a way to launch Vagrant from a container with Ansible to produce the hosts.ini file.

The TDP stack with Hadoop 3.3 is being tested with HBase 2.6 and Ranger 2.5. For now not too many patches have been added to the component to make the compilation.
