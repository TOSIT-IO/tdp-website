---
type: contributors
description: |
  Start to merge TDP2 pull requests into master.
---

# Notes from May 16th, 2025
 
Some pull requests have been merged into master for TDP2. TDP-collection 1.0.1 has been released for the TDP stack 1.1. Some discussions regarding Hive 4 and parquet-avro module are ongoing.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#148](https://github.com/TOSIT-IO/tdp-website/pull/148): status of “feat(pages): added tdp-extra and tdp-observability components in table for stack 1.1”. PR merged.
- [tdp-website#149](https://github.com/TOSIT-IO/tdp-website/pull/149): status of “feat(reports): contributors report of 25th of April”. PR merged.
- [tdp-collection#938](https://github.com/TOSIT-IO/tdp-collection/pull/938): status of “feat: Enable spark2 on TDPv2”. PR merged.
- [tdp-collection#939](https://github.com/TOSIT-IO/tdp-collection/pull/939): status of “fix(spark): use log4j2 log configuration”. PR merged.
- [tdp-collection#940](https://github.com/TOSIT-IO/tdp-collection/pull/940): status of “fix(zookeeper): give 755 permissions to all folders”. PR merged.
- [tdp-collection#943](https://github.com/TOSIT-IO/tdp-collection/pull/943): status of “refactor: add follow=false for recurse option in ansible”. PR merged.
- [tdp-collection-extras#218](https://github.com/TOSIT-IO/tdp-collection-extras/pull/218): status of “refactor: add follow=false for recurse option in ansible”. PR merged.
- [tdp-collection#219](https://github.com/TOSIT-IO/tdp-collection-extras/pull/219): status of “feat(sparklyr): add sparklyr jar for livy”. PR merged.
- [tdp-observability#134](https://github.com/TOSIT-IO/tdp-observability/pull/134): status of “refactor: add follow=false for recurse option in ansible”. PR merged.
- [tdp-collection#907](https://github.com/TOSIT-IO/tdp-collection/pull/907): status of “Refactor/hive4”. Ongoing investigations.
- [tdp-collection#917](https://github.com/TOSIT-IO/tdp-collection/pull/917): status of “feat(iceberg): add iceberg to spark”. Ongoing investigations.
- [tdp-collection#918](https://github.com/TOSIT-IO/tdp-collection/pull/918): status of “feat: add configuration for iceberg.”. Ongoing investigations.
- [tdp-collection#941](https://github.com/TOSIT-IO/tdp-collection/pull/941): status of “fix: name of the metastore uris parameter”. Ongoing investigations.

## Open Topics

## Hive

Hive 4.0.0 is not working as espected since it does not work with the MapReduce execution engine as well as some Iceberg operations fail. There are ongoing investigations and the possibility to use Hadoop 3.4.1 instead of Hadoop 3.3.6 in TDP 2.0 stack.

## HBase

As using Hadoop 3.4.1 is under discussion, it was also mentioned that HBase could be upgraded if it is adopted. HBase 2.5.11 or even HBase 2.6. 
