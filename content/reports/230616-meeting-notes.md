---
description: |
  Meeting notes covering open PRs, Hive and the creation of a setup project.
---

# Meeting notes June 16th, 2023

## Pull Requests

- [hadoop-old#4](https://github.com/TOSIT-IO/hadoop-old/pull/4): @rpignolet is expected to add some comments.
- incubator-livy-fork#1: open discussion on which Livy version to use. Spark3 isn't supported by Livy before the 0.8 version, which is not yet released (SNAPSHOT).
- [TDP#77](https://github.com/TOSIT-IO/TDP/pull/77): reviewed, to improve.
- [TDP#78](https://github.com/TOSIT-IO/TDP/pull/78): merged.
- [tdp-collections-extras#124](https://github.com/TOSIT-IO/tdp-collection-extras/pull/124): to be reviewed.
- [tdp-collection-prerequisites#76](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/76): many debates about wether or not to use `alternatives`. It brings us back to the philosophy of not touching the host system. Participants still agreed to merge it as it is not part of core collections.
- [tdp-lib#321](https://github.com/TOSIT-IO/tdp-lib/pull/321): first feature of the issue [#308](https://github.com/TOSIT-IO/tdp-lib/issues/308) to be implemented, on the dissociation of planning and execution. To review.
- [tdp-getting-started#275](https://github.com/TOSIT-IO/tdp-getting-started/pull/275): new modifications, to be reviewed again.
- [TDP#80](https://github.com/TOSIT-IO/TDP/pull/80): to review.
- [TDP#81](https://github.com/TOSIT-IO/TDP/pull/81): to review by a second peer.
- [TDP#82](https://github.com/TOSIT-IO/TDP/pull/82): merged.
- [tdp-lib#326](https://github.com/TOSIT-IO/tdp-lib/pull/326): to review.
- [tdp-lib#327](https://github.com/TOSIT-IO/tdp-lib/pull/327): to be adjusted after the merge of tdp-lib#318.
- [tdp-collection-extras#128](https://github.com/TOSIT-IO/tdp-collection-extras/pull/128): draft, everyone is ok to add Nifi to `tdp-collection-extras`.
- [tdp-collection-extras#130](https://github.com/TOSIT-IO/tdp-collection-extras/pull/130): to review.

## Open topics

- **@kpgtek Hive's bug**: after PR [hive-old#5](https://github.com/TOSIT-IO/hive-old/pull/5), all Hive tables are uppercases. However, Hive v3.x still uses lowercase for a few tables. The binary released with 1.0 (`apache-hive-3.1.3-1.0-bin.tar.gz`) integrate this PR but this build hasn't been tested with every environments. A bug appeared but was not reproducible by every participants using `tdp-getting-started` (see [hive#7](https://github.com/TOSIT-IO/hive/issues/7)). @Pierrotws will test Hive 3.1.4 and eventually release incremental patches.
- **@Pierrotws Hadoop version**: use version `3.1.4-1.0` for Hadoop 3.1.4 on TDP 1.1 from now on.
- **@PACordonnier tdp-setup**: need for a project to help create a TDP environment based on the release system. Setup should check TDP manager prerequisite but not install them (Python and Ansible in particular), download releases (instead of the Git submodules), generate configurations etc.

Proposals

- Create a script
- Write a doc
- Make a project dedicated to the deployment of TDP in user mode, based on a stable version. `tdp-getting-started` would become a development-only environment.
- Propose a VM

@PACordonnier will provide an initial script and the opportunity to publish it will be further discuss if not too specific to particular end-users.
