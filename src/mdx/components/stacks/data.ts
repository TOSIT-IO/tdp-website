import { Stack } from './types'

type StackNames = 'tdp-1.1' | 'tdp-2.0'

const stacks: { [k in StackNames]: Stack } = {
  'tdp-1.1': {
    manager: {
      lib: {
        repositoryUrl: 'https://github.com/TOSIT-IO/tdp-lib',
        tag: '1.0.0',
      },
    },
    core: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection',
      tag: '1.0.0',
      components: [
        {
          name: 'Prometheus JMX',
          upstream: {
            label: 'Prometheus',
            version: '0.20.0',
            repositoryUrl: 'https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent',
            tag: '',
            binaryUrl:
              'https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.20.0/jmx_prometheus_javaagent-0.20.0.jar',
          },
        },
        {
          name: 'Apache Zookeeper',
          upstream: {
            label: 'Apache',
            version: '3.4.14',
            repositoryUrl: 'https://github.com/apache/zookeeper',
            tag: 'release-3.4.14',
            binaryUrl:
              'https://archive.apache.org/dist/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz',
          },
        },
        {
          name: 'Apache Hadoop',
          upstream: {
            label: 'Apache',
            version: '3.1.1',
            repositoryUrl: 'https://github.com/apache/hadoop',
            tag: 'rel/release-3.1.1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hadoop',
            releases: {
              basic: {
                tag: '3.1.1-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hadoop/releases/download/3.1.1-0.0/hadoop-3.1.1-0.0.tar.gz',
              },
              fix: {
                tag: '3.1.1-0.2',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hadoop/releases/download/3.1.1-0.2/hadoop-3.1.1-0.2.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Hive 3',
          upstream: {
            label: 'Apache',
            version: '3.1.3',
            repositoryUrl: 'https://github.com/apache/hive',
            tag: 'rel/release-3.1.3',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hive',
            releases: {
              basic: {
                tag: '3.1.3-2.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hive/releases/download/3.1.3-2.0/apache-hive-3.1.3-2.0-bin.tar.gz',
              },
              fix: {
                tag: '3.1.3-2.3',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hive/releases/download/3.1.3-2.3/apache-hive-3.1.3-2.3-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Tez',
          upstream: {
            label: 'Apache',
            version: '0.9.2',
            repositoryUrl: 'https://github.com/apache/tez',
            tag: 'rel/release-0.9.2',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/tez',
            releases: {
              basic: {
                tag: '1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/tez/releases/download/0.9.2-1.0/tez-0.9.2-1.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Spark 2',
          upstream: {
            label: 'Apache',
            version: '2.3.4',
            repositoryUrl: 'https://github.com/apache/spark',
            tag: 'v2.3.4',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/spark',
            releases: {
              basic: {
                tag: '2.3.4-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/spark/releases/download/2.3.4-1.0/spark-2.3.4-1.0-bin-tdp.tgz',
              },
            },
          },
        },
        {
          name: 'Apache Spark 3',
          upstream: {
            label: 'Apache',
            version: '3.2.4',
            repositoryUrl: 'https://github.com/apache/spark',
            tag: 'v3.2.4',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/spark',
            releases: {
              basic: {
                tag: '3.2.4-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/spark/releases/download/3.2.4-1.0/spark-3.2.4-1.0-bin-tdp.tgz',
              },
            },
          },
        },
        {
          name: 'Apache Ranger',
          upstream: {
            label: 'Apache',
            version: '2.0.0*',
            repositoryUrl: 'https://github.com/apache/ranger',
            tag: 'release-ranger-2.0.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/ranger',
            releases: {
              fix: {
                tag: '2.0.0-1.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-admin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-hbase-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-hdfs-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-hive-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-kafka-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-kms.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-knox-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-usersync.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.0.0-1.0/ranger-2.0.0-1.0-yarn-plugin.tar.gz',
                ],
              },
            },
          },
        },
        {
          name: 'Apache Solr (for Ranger)',
          upstream: {
            label: 'Apache',
            version: '7.7.3',
            repositoryUrl: 'https://github.com/apache/solr',
            tag: 'releases/lucene-solr/7.7.3',
            binaryUrl:
              'https://archive.apache.org/dist/lucene/solr/7.7.3/solr-7.7.3.tgz',
          },
        },
        {
          name: 'Apache HBase',
          upstream: {
            label: 'Apache',
            version: '2.1.10 RC1*',
            repositoryUrl: 'https://github.com/apache/hbase',
            tag: '8d617c626b949cdadf8d914259f78d050556cc5d',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hbase',
            releases: {
              basic: {
                tag: '2.1.10-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hbase/releases/download/2.1.10-1.0/hbase-2.1.10-1.0-bin.tar.gz',
              },
              fix: {
                tag: '2.1.10-1.1',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hbase/releases/download/2.1.10-1.1/hbase-2.1.10-1.1-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache HBase Operator tools',
          upstream: {
            label: 'Apache',
            version: '1.1.0',
            repositoryUrl: 'https://github.com/apache/hbase-operator-tools',
            tag: 'rel/1.1.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hbase-operator-tools',
            releases: {
              basic: {
                tag: '1.1.0-0.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/hbase-operator-tools/releases/download/1.1.0-0.0/hbase-hbck2-1.1.0-0.0.jar',
                  'https://github.com/TOSIT-IO/hbase-operator-tools/releases/download/1.1.0-0.0/hbase-table-reporter-1.1.0-0.0.jar',
                  'https://github.com/TOSIT-IO/hbase-operator-tools/releases/download/1.1.0-0.0/hbase-tools-1.1.0-0.0.jar',
                ],
              },
            },
          },
        },
        {
          name: 'Apache HBase Connectors (for HBase)',
          upstream: {
            label: 'Apache',
            version: '1.0.0',
            repositoryUrl: 'https://github.com/apache/hbase-connectors',
            tag: 'rel/1.0.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hbase-connectors',
            releases: {
              basic: {
                tag: '1.0.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hbase-connectors/releases/download/2.3.4-1.0.0-0.0/hbase-spark-2.3.4-1.0.0-0.0.jar',
              },
            },
          },
        },
        {
          name: 'Apache Phoenix',
          upstream: {
            label: 'Apache',
            version: '5.1.3',
            repositoryUrl: 'https://github.com/apache/phoenix',
            tag: '5.1.3',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/phoenix',
            releases: {
              basic: {
                tag: '5.1.3-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/phoenix/releases/download/5.1.3-1.0/phoenix-hbase-2.1-5.1.3-1.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Phoenix Query Server',
          upstream: {
            label: 'Apache',
            version: '6.0.0',
            repositoryUrl: 'https://github.com/apache/phoenix-queryserver',
            tag: '6.0.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/phoenix-queryserver',
            releases: {
              basic: {
                tag: '6.0.0-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/phoenix-queryserver/releases/download/6.0.0-1.0/phoenix-queryserver-6.0.0-1.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Knox',
          upstream: {
            label: 'Apache',
            version: '1.6.1',
            repositoryUrl: 'https://github.com/apache/knox',
            tag: 'v1.6.1-release',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/knox',
            releases: {
              basic: {
                tag: '1.6.1-0.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/knox/releases/download/1.6.1-0.0/knox-1.6.1-0.0.tar.gz',
                  'https://github.com/TOSIT-IO/knox/releases/download/1.6.1-0.0/knoxshell-1.6.1-0.0.tar.gz',
                ],
              },
              fix: {
                tag: '1.6.1-0.1',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/knox/releases/download/1.6.1-0.1/knox-1.6.1-0.1.tar.gz',
                  'https://github.com/TOSIT-IO/knox/releases/download/1.6.1-0.1/knoxshell-1.6.1-0.1.tar.gz',
                ],
              },
            },
          },
        },
      ],
      buildDependencies: [
        {
          name: 'Apache Hive (for Spark 2)',
          upstream: {
            label: 'JoshRosen/hive',
            version: '1.2.1-spark2',
            repositoryUrl: 'https://github.com/JoshRosen/hive',
            tag: 'release-1.2.1-spark2',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/spark-hive',
            sources: {
              basic: { tag: '1.2.1.spark2-1.0' },
            },
          },
        },
        {
          name: 'Apache Hive 2 (for Spark 3)',
          upstream: {
            label: 'Apache',
            version: '2.3.9',
            repositoryUrl: 'https://github.com/apache/hive',
            tag: 'rel/release-2.3.9',
          },
          tosit: {
            repositoryUrl: 'https://github.com/apache/hive',
            sources: {
              basic: { tag: '2.3.9-1.0' },
              fix: { tag: '2.3.9-1.1' },
            },
          },
        },
      ],
    },
    extras: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection-extras',
      tag: '1.0.0',
      components: [
        {
          name: 'Apache Zookeeper',
          upstream: {
            label: 'Apache',
            version: '3.5.9',
            repositoryUrl: 'https://github.com/apache/zookeeper/releases',
            tag: 'release-3.5.9',
            binaryUrl:
              'https://archive.apache.org/dist/zookeeper/zookeeper-3.5.9/apache-zookeeper-3.5.9-bin.tar.gz',
          },
        },
        {
          name: 'Apache Kafka',
          upstream: {
            label: 'Apache',
            version: '2.8.2',
            repositoryUrl: 'https://github.com/apache/kafka',
            tag: '2.8.2',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/kafka',
            releases: {
              basic: {
                tag: '2.8.2-TDP-0.1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/kafka/releases/download/2.8.2-TDP-0.1.0/kafka_2.13-2.8.2-TDP-0.1.0-SNAPSHOT.tgz',
              },
            },
          },
        },
        {
          name: 'Apache Livy',
          upstream: {
            label: 'Apache',
            version: '0.8.0-incubating',
            repositoryUrl: 'https://github.com/apache/incubator-livy',
            tag: 'v0.8.0-incubating-rc1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/incubator-livy',
            releases: {
              fix: {
                tag: '0.8.0-incubating-1.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/incubator-livy/releases/download/0.8.0-incubating-1.0/apache-livy-0.8.0-incubating-1.0_2.12-bin.zip',
                  'https://github.com/TOSIT-IO/incubator-livy/releases/download/0.8.0-incubating-1.0/apache-livy-0.8.0-incubating-1.0_2.12-bin-thrift.zip',
                ],
              },
            },
          },
        },
        {
          name: 'Cloudera Hue',
          upstream: {
            label: 'Cloudera',
            version: '4.11.0',
            repositoryUrl: 'https://github.com/cloudera/hue',
            tag: 'release-4.11.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hue',
            releases: {
              fix: {
                tag: 'hue-release-4.11.0-1.0-cp38-cp38-manylinux2014_x86_64',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hue/releases/download/hue-release-4.11.0-1.0-cp38-cp38-manylinux2014_x86_64/hue-release-4.11.0-1.0-cp38-cp38-manylinux2014_x86_64.tar.gz',
              },
            },
          },
        },
        {
          name: 'JupyterHub',
          upstream: {
            label: 'JupyterHub',
            version: '2.3.1',
            repositoryUrl: 'https://github.com/jupyterhub/jupyterhub',
            tag: '2.3.1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/jupyterhub',
            releases: {
              basic: {
                tag: '2.3.1-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/jupyterhub/releases/download/2.3.1-0.0/jupyterhub-2.3.1-0.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'JupyterLab',
          upstream: {
            label: 'JupyterLab',
            version: '3.2.9',
            repositoryUrl: 'https://github.com/jupyterlab/jupyterlab',
            tag: 'v3.2.9',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/jupyterlab',
            releases: {
              basic: {
                tag: '3.2.9-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/jupyterlab/releases/download/3.2.9-0.0/jupyterlab-3.2.9-0.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'Sparkmagic',
          upstream: {
            label: 'jupyter-incubator',
            version: '0.21.0',
            repositoryUrl: 'https://github.com/jupyter-incubator/sparkmagic',
            tag: '0.21.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/sparkmagic',
            releases: {
              basic: {
                tag: '0.21.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/sparkmagic/releases/download/0.21.0-0.0/sparkmagic-0.21.0-0.0.tar.gz',
              },
            },
          },
        },
      ],
    },
    observability: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-observability',
      tag: '1.0.1',
      components: [
        {
          name: 'Node Exporter',
          upstream: {
            label: 'Prometheus',
            version: '1.3.1',
            repositoryUrl: 'https://github.com/prometheus/node_exporter',
            tag: 'v1.3.1',
            binaryUrl:
              'https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Grafana',
          upstream: {
            label: 'Grafana',
            version: '10.4.1',
            repositoryUrl: 'https://github.com/grafana/grafana',
            tag: 'v10.4.1',
            binaryUrl:
              'https://dl.grafana.com/oss/release/grafana-10.4.1.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Loki',
          upstream: {
            label: 'Grafana Loki',
            version: '2.7.2',
            repositoryUrl: 'https://github.com/grafana/loki',
            tag: 'v2.7.2',
            binaryUrl: [
              'https://github.com/grafana/loki/releases/download/v2.7.2/promtail-linux-amd64.zip',
              'https://github.com/grafana/loki/releases/download/v2.7.2/loki-linux-amd64.zip',
            ],
          },
        },
        {
          name: 'Prometheus',
          upstream: {
            label: 'Prometheus',
            version: '2.37.6',
            repositoryUrl: 'https://github.com/prometheus/prometheus',
            tag: 'v2.37.6',
            binaryUrl:
              'https://github.com/prometheus/prometheus/releases/download/v2.37.6/prometheus-2.37.6.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Alertmanager',
          upstream: {
            label: 'Prometheus',
            version: '0.26.0',
            repositoryUrl: 'https://github.com/prometheus/prometheus',
            tag: 'v0.26.0',
            binaryUrl:
              'https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz',
          },
        },
      ],
    },
  },
  'tdp-2.0': {
    core: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection',
      tag: 'master',
      components: [
        {
          name: 'Prometheus JMX',
          upstream: {
            label: 'Prometheus',
            version: '0.20.0',
            repositoryUrl: 'https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent',
            tag: '',
            binaryUrl:
              'https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.20.0/jmx_prometheus_javaagent-0.20.0.jar',
          },
        },
        {
          name: 'Apache Zookeeper',
          upstream: {
            label: 'Apache',
            version: '3.8.4',
            repositoryUrl: 'https://github.com/apache/zookeeper',
            tag: 'release-3.8.4',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/zookeeper',
            releases: {
              basic: {
                tag: '3.8.4-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/zookeeper/releases/download/3.8.4-0.0/apache-zookeeper-3.8.4-0.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Hadoop',
          upstream: {
            label: 'Apache',
            version: '3.3.6',
            repositoryUrl: 'https://github.com/apache/hadoop',
            tag: 'rel/release-3.3.6',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hadoop',
            releases: {
              basic: {
                tag: '3.3.6-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hadoop/releases/download/3.3.6-1.0/hadoop-3.3.6-1.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Hive 4',
          upstream: {
            label: 'Apache',
            version: '4.0.0',
            repositoryUrl: 'https://github.com/apache/hive',
            tag: 'rel/release-4.0.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hive',
            releases: {
              basic: {
                tag: '4.0.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hive/releases/download/4.0.0-0.0/apache-hive-4.0.0-0.0-bin.tar.gz',
              },
              fix: {
                tag: '4.0.0-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hive/releases/download/4.0.0-1.0/apache-hive-4.0.0-1.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Tez',
          upstream: {
            label: 'Apache',
            version: '0.10.4',
            repositoryUrl: 'https://github.com/apache/tez',
            tag: 'rel/release-0.10.4',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/tez',
            releases: {
              basic: {
                tag: '0.10.4-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/tez/releases/download/0.10.4-0.0/tez-0.10.4-0.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Spark 3',
          upstream: {
            label: 'Apache',
            version: '3.5.8',
            repositoryUrl: 'https://github.com/apache/spark',
            tag: 'v3.5.8',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/spark',
            releases: {
              basic: {
                tag: '3.5.8-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/spark/releases/download/3.5.8-0.0/spark-3.5.8-0.0-bin-tdp.tgz',
              },
              fix: {
                tag: '3.5.8-1.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/spark/releases/download/3.5.8-1.0/spark-3.5.8-1.0-bin-tdp.tgz',
              },
            },
          },
        },
        {
          name: 'Apache Iceberg',
          upstream: {
            label: 'Apache',
            version: '1.4.3',
            repositoryUrl: 'https://github.com/apache/iceberg',
            tag: 'apache-iceberg-1.4.3',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/iceberg',
            releases: {
              basic: {
                tag: '1.4.3-0.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/iceberg/releases/download/1.4.3-0.0/iceberg-spark-runtime-3.5_2.12-1.4.3-0.0.jar',
                  'https://github.com/TOSIT-IO/iceberg/releases/download/1.4.3-0.0/iceberg-mr-1.4.3-0.0.jar',
                ],
              },
            },
          },
        },
        {
          name: 'Apache Ranger',
          upstream: {
            label: 'Apache',
            version: '2.6.0',
            repositoryUrl: 'https://github.com/apache/ranger',
            tag: 'release-ranger-2.6.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/ranger',
            releases: {
              basic: {
                tag: '2.6.0-1.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-admin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-hbase-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-hdfs-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-hive-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-kms.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-knox-plugin.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-usersync.tar.gz',
                  'https://github.com/TOSIT-IO/ranger/releases/download/2.6.0-1.0/ranger-2.6.0-1.0-yarn-plugin.tar.gz',
                ],
              },
            },
          },
        },
        {
          name: 'Apache Solr (for Ranger)',
          upstream: {
            label: 'Apache',
            version: '8.11.3',
            repositoryUrl: 'https://github.com/apache/lucene-solr',
            tag: 'releases/lucene-solr/8.11.3',
            binaryUrl:
              'https://archive.apache.org/dist/lucene/solr/8.11.3/solr-8.11.3.tgz',
          },
        },
        {
          name: 'Apache HBase',
          upstream: {
            label: 'Apache',
            version: '2.6.1',
            repositoryUrl: 'https://github.com/apache/hbase',
            tag: 'rel/2.6.1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hbase',
            releases: {
              basic: {
                tag: '2.6.1-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hbase/releases/download/2.6.1-0.0/hbase-2.6.1-0.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache HBase Operator tools',
          upstream: {
            label: 'Apache',
            version: '1.3.0-SNAPSHOT',
            repositoryUrl: 'https://github.com/apache/hbase-operator-tools',
            tag: 'fd5a5fb90755949a90c502c76de8313130403fa3',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hbase-operator-tools',
            releases: {
              basic: {
                tag: '1.3.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hbase-operator-tools/releases/download/1.3.0-0.0/hbase-hbck2-1.3.0-0.0.jar',
              },
            },
          },
        },
        {
          name: 'Apache Phoenix',
          upstream: {
            label: 'Apache',
            version: '5.2.1',
            repositoryUrl: 'https://github.com/apache/phoenix',
            tag: '5.2.1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/phoenix',
            releases: {
              basic: {
                tag: '5.2.1-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/phoenix/releases/download/5.2.1-0.0/phoenix-hbase-2.6-5.2.1-0.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Phoenix Query Server',
          upstream: {
            label: 'Apache',
            version: '6.0.0',
            repositoryUrl: 'https://github.com/apache/phoenix-queryserver',
            tag: '3a7ffde42ae19fd31de986b6475fce4f977c4c26',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/phoenix-queryserver',
            releases: {
              basic: {
                tag: '6.0.0-2.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/phoenix-queryserver/releases/download/6.0.0-2.0/phoenix-queryserver-6.0.0-2.0-bin.tar.gz',
              },
            },
          },
        },
        {
          name: 'Apache Knox',
          upstream: {
            label: 'Apache',
            version: '2.0.0',
            repositoryUrl: 'https://github.com/apache/knox',
            tag: 'v2.0.0-RC2',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/knox',
            releases: {
              basic: {
                tag: '2.0.0-0.0',
                binaryUrl: [
                  'https://github.com/TOSIT-IO/knox/releases/download/2.0.0-0.0/knox-2.0.0-0.0.tar.gz',
                  'https://github.com/TOSIT-IO/knox/releases/download/2.0.0-0.0/knoxshell-2.0.0-0.0.tar.gz',
                ],
              },
            },
          },
        },
      ],
    },
    extras: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection-extras',
      tag: 'master',
      components: [
        {
          name: 'Apache Livy',
          upstream: {
            label: 'Apache',
            version: '0.9.0-incubating-SNAPSHOT',
            repositoryUrl: 'https://github.com/apache/incubator-livy',
            tag: '710c0784dae73aa7c5a6ce0bac264bcfdefd7681',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/incubator-livy',
            releases: {
              fix: {
                tag: '0.9.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/incubator-livy/releases/download/0.9.0-0.0/apache-livy-0.9.0-0.0_2.12-bin.zip',
              },
            },
          },
        },
        {
          name: 'Cloudera Hue',
          upstream: {
            label: 'Cloudera',
            version: '4.11.0',
            repositoryUrl: 'https://github.com/cloudera/hue',
            tag: 'release-4.11.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/hue',
            releases: {
              fix: {
                tag: 'hue-release-4.11.0-2.0-cp38-cp38-manylinux2014_x86_64',
                binaryUrl:
                  'https://github.com/TOSIT-IO/hue/releases/download/hue-release-4.11.0-2.0-cp38-cp38-manylinux2014_x86_64/hue-release-4.11.0-2.0-cp38-cp38-manylinux2014_x86_64.tar.gz',
              },
            },
          },
        },
        {
          name: 'JupyterHub',
          upstream: {
            label: 'JupyterHub',
            version: '2.3.1',
            repositoryUrl: 'https://github.com/jupyterhub/jupyterhub',
            tag: '2.3.1',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/jupyterhub',
            releases: {
              basic: {
                tag: '2.3.1-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/jupyterhub/releases/download/2.3.1-0.0/jupyterhub-2.3.1-0.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'JupyterLab',
          upstream: {
            label: 'JupyterLab',
            version: '3.2.9',
            repositoryUrl: 'https://github.com/jupyterlab/jupyterlab',
            tag: 'v3.2.9',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/jupyterlab',
            releases: {
              basic: {
                tag: '3.2.9-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/jupyterlab/releases/download/3.2.9-0.0/jupyterlab-3.2.9-0.0.tar.gz',
              },
            },
          },
        },
        {
          name: 'Sparkmagic',
          upstream: {
            label: 'jupyter-incubator',
            version: '0.21.0',
            repositoryUrl: 'https://github.com/jupyter-incubator/sparkmagic',
            tag: '0.21.0',
          },
          tosit: {
            repositoryUrl: 'https://github.com/TOSIT-IO/sparkmagic',
            releases: {
              basic: {
                tag: '0.21.0-0.0',
                binaryUrl:
                  'https://github.com/TOSIT-IO/sparkmagic/releases/download/0.21.0-0.0/sparkmagic-0.21.0-0.0.tar.gz',
              },
            },
          },
        },
      ],
    },
    observability: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-observability',
      tag: 'master',
      components: [
        {
          name: 'Node Exporter',
          upstream: {
            label: 'Prometheus',
            version: '1.9.1',
            repositoryUrl: 'https://github.com/prometheus/node_exporter',
            tag: 'v1.9.1',
            binaryUrl:
              'https://github.com/prometheus/node_exporter/releases/download/v1.9.1/node_exporter-1.9.1.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Grafana',
          upstream: {
            label: 'Grafana',
            version: '12.1.1',
            repositoryUrl: 'https://github.com/grafana/grafana',
            tag: 'v12.1.1',
            binaryUrl:
              'https://dl.grafana.com/oss/release/grafana-12.1.1.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Loki',
          upstream: {
            label: 'Grafana Loki',
            version: '3.5.4',
            repositoryUrl: 'https://github.com/grafana/loki',
            tag: 'v3.5.4',
            binaryUrl:
              'https://github.com/grafana/loki/releases/download/v3.5.4/loki-linux-amd64.zip',
          },
        },
        {
          name: 'Alloy',
          upstream: {
            label: 'Grafana Alloy',
            version: '1.10.2',
            repositoryUrl: 'https://github.com/grafana/alloy',
            tag: 'v1.10.2',
            binaryUrl:
              'https://github.com/grafana/alloy/releases/download/v1.10.2/alloy-linux-amd64.zip',
          },
        },
        {
          name: 'Prometheus',
          upstream: {
            label: 'Prometheus',
            version: '3.5.0',
            repositoryUrl: 'https://github.com/prometheus/prometheus',
            tag: 'v3.5.0',
            binaryUrl:
              'https://github.com/prometheus/prometheus/releases/download/v3.5.0/prometheus-3.5.0.linux-amd64.tar.gz',
          },
        },
        {
          name: 'Alertmanager',
          upstream: {
            label: 'Prometheus',
            version: '0.28.1',
            repositoryUrl: 'https://github.com/prometheus/prometheus',
            tag: 'v0.28.1',
            binaryUrl:
              'https://github.com/prometheus/alertmanager/releases/download/v0.28.1/alertmanager-0.28.1.linux-amd64.tar.gz',
          },
        },
      ],
    },
  },
}

export default stacks
