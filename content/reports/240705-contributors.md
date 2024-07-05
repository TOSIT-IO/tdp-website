---
type: contributors
description: |
  PR tdp-collection#850 and the use of Alluxio
---

# Notes from July 5th, 2024

PR tdp-collection#850 and the use of Alluxio

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#844](https://github.com/TOSIT-IO/tdp-collection/pull/844): status of "feat(spnego): add ha support with kerberos". PR merged.
- [tdp-collection#847](https://github.com/TOSIT-IO/tdp-collection/pull/847): status of "fix: use v3 configuration for ranger audit log export to hdfs". Discussed last week, commentaries have been added. PR merged.
- [tdp-collection#850](https://github.com/TOSIT-IO/tdp-collection/pull/850): status of "spark2|3: add ha support for spark-hs". Spark history-server does not go through Knox, so that Knox does not become obligatory. However, we maybe should create one keytab per host for all principals of the services so that Knox can communicate with them. Still to be discussed.
- [jupyterhub#1](https://github.com/TOSIT-IO/jupyterhub/pull/1): status of "Add Readme". PR merged. PR merged.
- [hue#2](https://github.com/TOSIT-IO/hue/pull/2): status of "refactor: build with manylinux2014 image". PR merged. However, find another name for the branch and for the release.
- [tdp-website#101](https://github.com/TOSIT-IO/tdp-website/pull/101): status of "feat(reports): 240628 contributors report". PR merged.

## Open topics

Added patches for Hive 3 which gives us the release 3.1.3-2.3.

Work on the integration of PrestoSQL has started. However, Alluxio might be used instead as it will work more efficiently with Hive as it uses a cache and will run with Yarn, has better capacity scheduling for multiple users as well as enables to manage S3 permissions with Ranger. To be further discussed, but work has started on it.
