---
type: contributors
description: |
  Investigation of CVE-2025-30065 which affects Apache Parquet
---

# Notes from June 13th, 2025

Part of Hive-acid does not work. In Hive 3, the location variable manages both external tables and managed tables. In hive 4 there are 2 different variables: location and managedlocation. Due to this change, a lambda user can no longer access the managed table in Hive 4 in the same way as in Hive 3. The solution for hive 4 to have ACID properties could be to use iceberg. Investigation in progress.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#945](https://github.com/TOSIT-IO/tdp-collection/pull/945): status of "fix(knox): correct log4j2 config". PR merged.
- [tdp-collection#946](https://github.com/TOSIT-IO/tdp-collection/pull/946): status of "fix(spark3): hs log4j2 config". PR merged.
- [tdp-collection#947](https://github.com/TOSIT-IO/tdp-collection/pull/947): status of "fix(phoenix-qs): log4j2 configuration". PR merged.
- [tdp-collection#948](https://github.com/TOSIT-IO/tdp-collection/pull/948): status of "fix(hive): hiveserver and metastore log4j2 config". PR merged
- [tdp-collection#907](https://github.com/TOSIT-IO/tdp-collection/pull/907): status of "Refactor/hive4". PR merged
- [tdp-collection#918](https://github.com/TOSIT-IO/tdp-collection/pull/918): status of "feat: add configuration for iceberg". PR merged
- [tdp-collection#941](https://github.com/TOSIT-IO/tdp-collection/pull/941): status of "fix: name of the metastore uris parameter". PR merged
- [tdp-collection#917](https://github.com/TOSIT-IO/tdp-collection/pull/917): status of "feat(iceberg): add iceberg to spark". To be modified
- [tdp-website#152](https://github.com/TOSIT-IO/tdp-website/pull/152): status of "feat(reports): contributors report of the June 6th 2025". PR merged

## Open Topics

### PR explanation
With log4j2 you can't add RFA and DRFA together, so pull requests 947 and 948 add a condition for choosing the appender in Hive and Phoenix Query Server. These changes have also been made in knox and spark history server in PR 945 and 946.
PR 918 enables iceberg to work properly with Hive.

### CVE

Investigation of CVE-2025-30065 which affects Apache Parquet. Spark seems to work with a 1.15.1 update of Parquet. Study in progress.
