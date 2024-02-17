---
type: contributors
description: |
  Review of PRs for collections, backport of patches for tdp stack componants and preparations for TDP-1.1
---

# Notes from November 10th, 2023

Discussions about current open PR regarding Knox compatibility with Livy, `tdp-observability` refactor and status update of the TDP Stack 1.1 development.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [TDP#88](https://github.com/TOSIT-IO/TDP/pull/88): Documentation of tdp componants.
- [TDP#90](https://github.com/TOSIT-IO/TDP/pull/90): 
  - Tez update to 0.9.2 had API changes that caused issue with Hive. Decided to revert to tez 0.9.1.
  - Snapshotted version has been created for Hadoop, Tez, Hive 2 and 3 (Hive 1 hasnt been modified), spark 2 and spark3.
  - Issued with guava version compatibility with Hadoop and Hive remains.
- [hadoop#7](https://github.com/TOSIT-IO/hadoop/pull/7): Merged in session.
  - Modification of zookeeper dependencies. 
- [hive#13](https://github.com/TOSIT-IO/hive/pull/13): @PACordonnier is working on it and will be merged. PR that creates released version will require approval.
- [tdp-collection#816](https://github.com/TOSIT-IO/tdp-collection/pull/816): Correction of knox livy urls (rewrite rules).
- [tdp-observability#59](https://github.com/TOSIT-IO/tdp-observability/pull/59): Refactor the tdp_targets in observability to a new format, drops the feature managing multiple cluster in one observability instance. Team should review the new standard. Some components may still be missing.
- [tdp-collection#817](https://github.com/TOSIT-IO/tdp-collection/pull/817): Merged in session.
  - Correction of timestamps logs in loky. 
- [tdp-collection#819](https://github.com/TOSIT-IO/tdp-collection/pull/819): 
  - Discution on rewrites rules management.
  - Documentation of rewrites rules.
- [tdp-collection#821](https://github.com/TOSIT-IO/tdp-collection/pull/821): Merged in session.
  - Setting cluster mode for spark jobs by default
  - Setting client mode for spark shells jobs by default. 
- [tdp-collection-prerequisites#97](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/97): Variabilisation of certificates paths.
- [tez#6](https://github.com/TOSIT-IO/tez/pull/6): Merged in session.
  - Componant snapshot mode.
- [hive#18](https://github.com/TOSIT-IO/hive/pull/18): Merged in session. 
  - Hive 2 necessary for Spark3 compiling.
  - Backport of patches required for Hive 2 users. 
- [spark#3](https://github.com/TOSIT-IO/spark/pull/3): Update of tests. Discussion on sharing test results.
