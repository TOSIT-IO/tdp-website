---
type: contributors
description: |
  Review of PRs for collections, repositories management and preparations for TDP-1.1.
---

# Notes from February 2th, 2024

Discussions about current open PR and TDP 1.1 release. Subjects on TDP website, `tdp-observability` logging and dashboards, status update of the TDP Stack 1.1 development and TDP repositories management.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website/getting-started](https://github.com/TOSIT-IO/tdp-website/tree/getting-started) : WIP . TODO in yellow. Error on the `Getting Started link`. Segmenting of the documentation need to be determined. Possible usage/deployment documented : UI, Playbooks, CLI.
- [tdp-collection#830](https://github.com/TOSIT-IO/tdp-collection/pull/830):
- [tdp-collection-extras#169](https://github.com/TOSIT-IO/tdp-collection-extras/pull/169):Added TZ timeformat toogle for logs. Resolved conflict. Merged
- [tdp-observability#81](https://github.com/TOSIT-IO/tdp-observability/pull/81): Log variables are moved to tdp-cluster. Currently, comment/documentation on variables only visible on `tdp_vars_default`. Changes can be made so that they appeare in `tdp_vars`. Merged.
- [tdp-observability#83](https://github.com/TOSIT-IO/tdp-observability/pull/83): Added log dashbords: `tdp-logs` for TDP stack, `tdp-observability-logs` for  Graphana, Prometheus and exporters. Review to be made for file names of dashbord. A naming convention should be determined. PR needs rebase.
- [tdp-collection-extras#172](https://github.com/TOSIT-IO/tdp-collection-extras/pull/172): There is configuration difficulties for promtail datetime format. A specific format needed for HUE, different from TDP's ISO timedate format. A predefined harcoded date is needed for parsing the target format in promtail. Merge conflict to solve.


## Open topics

Default branch on `TDP-build` or `TDP` branch to be decided.

Sugestions:

- `TDP` branch : use this branch when users whants patchs for for detected problems.

Normalized branches in composants repos. Branches `TDP-build` and `TDP` will always be present . If theyre is no patches, `TDP` branch HEAD will have the same commit.

Doc commit should be squashed.

TDP stack :

- TEZ : Update of hadoop version. Versions commits and doc commit are separated. This is not done for tez because the 0.9.1 is already released.
- Spark : Added build script to Jenkins file. Pentaho is excluded because of calcite. PR not released yet: Druid is not present and Apache commit should be tried to be integrated.
- Hive: releases PRs [hive#23](https://github.com/TOSIT-IO/hive/pull/23) and [hive#24](https://github.com/TOSIT-IO/hive/pull/24/files). Merged.
- Hbase: Problem for default dependance repository. Long time to acess and download dependancies. Added mirror in configurations.
Squash and rebase of `branch-2.1.10-build` commits.
- Ranger: Currently, previous release version is used. Add Apache commit for build version. Apache version too ahead for backportsand is closer to 2.2 . This should be reconsidered for TDP-2.0 .
- Phoenix: commits to squash.
- Hbase-connector: Build branch to be added.
- Hbase: `HBASE-21284` change default configuration values. This patch is necessary for preventing bad compaction performances.
