---
type: contributors
description: |
  TDP2 Hive 4 and Ranger have been recompiled for Iceberg
---

# Notes from March 14th, 2025

 TDP2 Hive 4 and Ranger have been recompiled for Iceberg. Compilation of Iceberg for spark 3.5.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#909](https://github.com/TOSIT-IO/tdp-collection/pull/909): status of " fix(spark3): tune spark dynamic allocation configuration". Ongoing investigations.
- [tdp-collection#911](https://github.com/TOSIT-IO/tdp-collection/pull/911): status of " fix: xml merge needs vars update". PR merged.

## Open Topics

Hive 4 and Ranger have been recompiled for Iceberg. Iceberg 1.4.3 works with Hive 4. Test of iceberg-spark-runtime 1.4.3 for Spark 3.2 with Spark 3.5, it works but is not adapted. 

The goal is to compile iceberg-spark-runtime 1.4.3 for Spark 3.5 with Scala 2.12 by using Java 8.