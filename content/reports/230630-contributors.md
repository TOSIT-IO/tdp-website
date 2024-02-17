---
type: contributors
description: |
  Meeting notes covering open PRs, tdp-website.
---

# Notes from June 30rd, 2023

## Pull Requests

- [hadoop-old#4](https://github.com/TOSIT-IO/hadoop-old/pull/4): Closed as moved to the new repository.
- [incubator-livy-fork#1](https://github.com/TOSIT-IO/incubator-livy-fork/pull/1): to fix by @Pierrotws.
- [tdp-collection-extras#124](https://github.com/TOSIT-IO/tdp-collection-extras/pull/124): to review.
- [tdp-getting-started#275](https://github.com/TOSIT-IO/tdp-getting-started/pull/275): merged.
- [TDP#80](https://github.com/TOSIT-IO/TDP/pull/80): to review.
- [TDP#81](https://github.com/TOSIT-IO/TDP/pull/81): merged.
- [tdp-collection-extras#130](https://github.com/TOSIT-IO/tdp-collection-extras/pull/130): to review.
- [tdp-website#9](https://github.com/TOSIT-IO/tdp-website/pull/9): seems to match last comments, to review.
- [tdp-collection#765](https://github.com/TOSIT-IO/tdp-collection/pull/765): to review by @Pierrotws and @GuillaumeHold.
- [hadoop#5](https://github.com/TOSIT-IO/hadoop/pull/5): comment to move it on another branch.
- [website#12](https://github.com/TOSIT-IO/tdp-website/pull/12): to review.
- [website#13](https://github.com/TOSIT-IO/tdp-website/pull/13): to review.
- [tdp-getting-started#278](https://github.com/TOSIT-IO/tdp-getting-started/pull/278): merged.
- [tdp-collection#769](https://github.com/TOSIT-IO/tdp-collection/pull/769): to review.
- [tdp-collection-extras#132](https://github.com/TOSIT-IO/tdp-collection-extras/pull/132): to review.
- [tdp-collection#771](https://github.com/TOSIT-IO/tdp-collection/pull/771): @PACordonnier states that this PR in not usable. A better solution is needed.
- [tdp-lib#328](https://github.com/TOSIT-IO/tdp-lib/pull/328): merged.
- [tdp-lib#336](https://github.com/TOSIT-IO/tdp-lib/pull/336): to review.
- [tdp-lib#339](https://github.com/TOSIT-IO/tdp-lib/pull/339): to review.
- [tdp-lib#341](https://github.com/TOSIT-IO/tdp-lib/pull/341): to review.

## Open topics

- @rpignolet YARN capacity scheduler: see related [discussion](https://github.com/orgs/TOSIT-IO/discussions/84). We should try to remove the capacity scheduler from the tdp_vars and the dag. Then, we need to verify that the ressource manager can start with an empty scheduler. If not, we need to write a placeholder. We also need to create an utility to send a capacity_scheduler.xml to the ressource manager and another one to refresh the ressource manager. If the modification implies a restart of the ressource manager, the library can't know it, it is up to the operator to do it.
