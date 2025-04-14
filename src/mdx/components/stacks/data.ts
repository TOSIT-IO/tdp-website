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
      components: [],
    },
    observability: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-observability',
      tag: '1.0.1',
      components: [],
    },
  },
  'tdp-2.0': {
    core: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection',
      tag: '',
      components: [],
      buildDependencies: [],
    },
    extras: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-collection-extras',
      tag: '1.0.0',
      components: [],
    },
    observability: {
      repositoryUrl: 'https://github.com/TOSIT-IO/tdp-observability',
      tag: '1.0.1',
      components: [],
    },
  },
}

export default stacks
