---
type: contributors
description: |
  Preparing TDP2 development
---

# Notes from April 18th, 2025
 
New issue created for Zookeeper regarding a packaging problem with directory permissions.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#146](https://github.com/TOSIT-IO/tdp-website/pull/146): status of “250411 contributors report”. PR merged.
- [tdp-collection#932](https://github.com/TOSIT-IO/tdp-collection/pull/932): status of “refactor(permissions): change all folder 777 permissions to 1777 in hdfs”. PR merged.
- [tdp-collection#933](https://github.com/TOSIT-IO/tdp-collection/pull/933): status of “fix hbase_jmx-exporter: necessary fix to enable the phoenix-queryserver to start on TDP2”. PR closed.
- [tdp-collection#934](https://github.com/TOSIT-IO/tdp-collection/pull/934): status of “split hbase and pqs jmx configuration into two files”. PR merged.
- [tdp-observability#132](https://github.com/TOSIT-IO/tdp-observability/pull/132): status of “Delete galaxy dependency tdp-collections”. PR merged.
- [TDP#102](https://github.com/TOSIT-IO/TDP/pull/102): status of "feat(tdp-builder): new tdp-builder based on apache hadoop 3.3.6 builder image". PR opened : waiting for reviews.


## Open Topics

### Zookeeper

A new [Zookeeper issue](https://github.com/TOSIT-IO/zookeeper/issues/1) has been created. Zookeeper releases starting from version 3.5 have missing directory permissions on the lib folder.

### tdp-incus

tdp-incus has been refactored with new features.