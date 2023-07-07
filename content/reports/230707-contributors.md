---
description: |
  Meeting notes covering open PRs, cluster reconfiguration improvements and Python and Ansible versions.
---

# Meeting notes July 7th, 2023

## Pull Requests

- [incubator-livy-fork#1](https://github.com/TOSIT-IO/incubator-livy-fork/pull/1): to fix by @Pierrotws.
- [tdp-collection-extras#124](https://github.com/TOSIT-IO/tdp-collection-extras/pull/124): to review.
- [TDP#80](https://github.com/TOSIT-IO/TDP/pull/80): to review, some conflicts need to be resolved.
- [tdp-collection-extras#130](https://github.com/TOSIT-IO/tdp-collection-extras/pull/130): to review.
- [tdp-website#9](https://github.com/TOSIT-IO/tdp-website/pull/9): to review.
- [tdp-collection#765](https://github.com/TOSIT-IO/tdp-collection/pull/765): tdp-collection is not supposed to install anything. Missing dependencies need to be added through `tdp-prerequisites`. Also, some path are hardcoded. This PR needs to be fixed.
- [hadoop#5](https://github.com/TOSIT-IO/hadoop/pull/5): commented, to review.
- [website#12](https://github.com/TOSIT-IO/tdp-website/pull/12): to review.
- [website#13](https://github.com/TOSIT-IO/tdp-website/pull/13): merged.
- [tdp-collection#769](https://github.com/TOSIT-IO/tdp-collection/pull/769): to review.
- [tdp-collection-extras#132](https://github.com/TOSIT-IO/tdp-collection-extras/pull/132): to review.
- [tdp-collection#777](https://github.com/TOSIT-IO/tdp-collection/pull/777): merged. @gonzaloetjo comment's need to be converted to an issue.
- [tdp-lib#350](https://github.com/TOSIT-IO/tdp-lib/pull/350): to review.
- [hive#8](https://github.com/TOSIT-IO/hive/pull/8): merged. However this could be improved by having our own repoitory.
- [knox#2](https://github.com/TOSIT-IO/knox/pull/2): merged.
- [tdp-lib#358](https://github.com/TOSIT-IO/tdp-lib/pull/358): to review.

## Open topics

- @rpignolet's new library commands: Previously, the `tdp deploy` command was utilized to deploy the entire cluster. However, we recently separated the planning step from the deployment. Now, `tdp plan [...]` will save a deployment plan in the database, which can later be executed by `tdp deploy`. In the future, we aim to enhance the planning step for reconfiguring by enabling planning for only a subset of components.

  Currently, when running a `tdp plan reconfigure`, the generated plan can be quite lengthy. Therefore, we intend to introduce a `tdp stale` command to list the stale components (components that need to be reconfigured/restarted after editing some variables). The output of the stale command enables the launching of a reconfiguration split into multiple steps (for instance, `tdp plan reconfigure hdfs*`).

  Our next steps include adding commands to modify a generated deployment plan before its execution. We also plan to introduce a command for variable configuration editing (to track the stale components more efficiently). Eventually, we will add a host definition command.

- @PACordonnier reconfigure operations: Apparently, when doing a reconfigure, too many services seems to be restarted. The current dag is good for deployment, however, it is not ideal for reconfigure. We need to find some practical examples to think about possible improvements.
- @Edouard-R artifact repository for end user developers: see [discussion #87](https://github.com/orgs/TOSIT-IO/discussions/87).
- @rpignolet Python version: `tdp-collection` seems to be compatible with Python 3.9 (even if Ansible 2.9 is not officially suported). He'll test it further and update the documentation accordingly. Then, we'll look into upgrading Ansible to `ansible-core` 2.15.
