---
type: contributors
description: |
  Weekly meeting of the TDP contributors to discuss open PRs and particularly of the TDP 1.1 release.
---

# Notes from February 9th, 2024

Discussion about the compilation of TDP 1.1 stack.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-observability#83](https://github.com/TOSIT-IO/tdp-observability/pull/83): Discussed last meeting, it needed a rebase, it has been merged.
- [tdp-collection-extras#172](https://github.com/TOSIT-IO/tdp-collection-extras/pull/172): Discussed last meeting, it needed a rebase, it has been merged.

## Open topics

Must still discuss the branch names of the components. Branches containing `-build` must be renamed.

TDP stack :

- Hive: Replaced patch removing dependency `pentaho-aggdesigner-algorithm` with patch `HIVE-25173` which replaces the dependency with `aggdesigner-algorithm` in branch `branch-2.3.9-build`.
- Spark: Detected the cause of [issue 6](https://github.com/TOSIT-IO/spark/issues/6). It is related to the fact that profile `hadoop-3.1` has been added with two artifact names pointing to the same artifact `hadoop-client` while profile `hadoop-3.2` is always activated. Decision is to deactivate profile `hadoop-3.2` in maven command and add profile `hadoop-3.1` where it is missing as copy of the latter profile but by removing the dependency which comes twice and test this modification on a new branch `branch-3.2.4-build-new`.
- Ranger: Branch `ranger-2.0-build` is now a fork of branch `ranger-2.0-tdp`. Hive version has been changed in both branches to `3.1.3-2.0`. Must rename branch to have 3 digits and clean the commits.
- HBase-connector: Created branch `branch-2.3.5-1.0.0-build` which is identical to `branch-2.3.5-1.0.0-TDP`.
