---
description: |
  eeting notes covering open PRs, Hive and a setup project.
---

# Meeting notes June 16th, 2023

## Pull Requests

- [hadoop-old#4](https://github.com/TOSIT-IO/hadoop-old/pull/4): @rpignolet is expected to comment the PR.
- incubator-livy-fork#1: open discussion on the Livy version to use. Spark3 isn't supported by Livy before 0.8, which is not yet released (SNAPCHOT).
- [TDP#77](https://github.com/TOSIT-IO/TDP/pull/77): to improve.
- [TDP#78](https://github.com/TOSIT-IO/TDP/pull/78): merged.
- [tdp-collections-extras#124](https://github.com/TOSIT-IO/tdp-collection-extras/pull/124): PR to be reviewed.
- [tdp-collection-prerequisites#76](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/76): many discussions on the usage of `alternatives`, whether to use them or not, and the philosofical question to modify the host system and using a similar approache to `tdp-collection-prerequisites`.
- [tdp-lib#321](https://github.com/TOSIT-IO/tdp-lib/pull/321): first feature for issue [#308](https://github.com/TOSIT-IO/tdp-lib/issues/308) implemented, discuss the planification and the execution, PR to be reviewed.
- [tdp-getting-started#275](https://github.com/TOSIT-IO/tdp-getting-started/pull/275): new modifications, to be further reviewed.
- [TDP#80](https://github.com/TOSIT-IO/TDP/pull/80): to be reviewed.
- [TDP#81](https://github.com/TOSIT-IO/TDP/pull/81): to be reviewed by a second peer.
- [TDP#82](https://github.com/TOSIT-IO/TDP/pull/82): merged.
- [tdp-lib#326](https://github.com/TOSIT-IO/tdp-lib/pull/326): to further reviewed.
- [tdp-lib#327](https://github.com/TOSIT-IO/tdp-lib/pull/327): waiting for adjustment after merged from tdp-lib#318
- [tdp-collection-extras#128](https://github.com/TOSIT-IO/tdp-collection-extras/pull/128): draft, everyone is ok to add Nifi to `tdp-collection-extras`.
- [tdp-collection-extras#130](https://github.com/TOSIT-IO/tdp-collection-extras/pull/130): to be reviewed.

## Open topics

- @kpgtek Hive's bug: after PR [hive-old#5](https://github.com/TOSIT-IO/hive-old/pull/5), all Hive tables are uppercases. However, Hive v3.x still uses lowercase for a few tables. The binary released with 1.0 (`apache-hive-3.1.3-1.0-bin.tar.gz`) integrate this PR, this build hasn't been tested with every environments. A bug appeared but was not reproductible by every participants using `tdp-getting-started` (see [hive#7](https://github.com/TOSIT-IO/hive/issues/7)). @Pierrotws will test Hive 3.1.4 and eventuallly release incremental patches.
- @Pierrotws start using Hadoop `3.1.4-1.0` for Hadoop 3.1.4 on TDP 1.1.
- @PACordonnier tdp-setup: need for a project to help the creation of TDP environments using the release system. The setupe must check the requirements of TDP manager but not install them (Python and Ansible in particular), download the releases (instead of the Git submodules), generate the configurations, ...

Proposals

- Make a script
- Write a doc
- Make a project dedicated to the deployment of TDP in user mode, with a stable version. `tdp-getting-started` would become a development-only environment.
- Propose a VM

@PACordonnier will provide an initial script and the opportunity to publish it will be further discuss if not too specific to particular end-users.
