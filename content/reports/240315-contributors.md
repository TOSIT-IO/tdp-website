---
type: contributors
description: |
  Hive version for TDP stack 2.0
---

# Notes from March 15th, 2024

Hive version for TDP stack 2.0

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#836](https://github.com/TOSIT-IO/tdp-collection/pull/836): Remove log4j v1 jars from hive CLASSPATH. Hive uses log4j2 logger, but log4j v1 jars are also included in its CLASSPATH. This generates errors when configuring log4j for Ranger plugin auditlogs. Therefore, the PR excludes log4j jars in hive CLASSPATH. PR merged.
- [TDP#96](https://github.com/TOSIT-IO/TDP/pull/96): Change branch names in bin/check-component-branch-rebase.sh. The branch names has been changed in the script as stated below in *Open topics*. PR merged.
- [TDP#90](https://github.com/TOSIT-IO/TDP/pull/90): Status of "TDP 1.1 BOM". README.md about the versions of TDP stack 1.1 has been updated, but there are still some changes to be made.

## Open topics

TDP stack 1.1

- Except the `default` branch in each project, the branches `-build` and `-TDP` have respectively been renamed `-basic` and `-fix`.

- Spark: `spark-3.2.4-0.0` changed to `spark-3.2.4-1.0`.

TDP stack 2.0

- `Hive 3` does not compile with `Hadoop 3.3` unless using Apache Bigtop.

- `Hive 4` is needed to integrate `Iceberg` which can be very valuable for TDP.

- However, `Ranger` does  not compile with `Hive 4`, therefore, the current proposal is to conserve both `Hive 3` and `Hive 4` for now.
