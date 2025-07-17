---
type: contributors
description: |
Compilation error of HBCK2 with HBase 2.6.0.
---

# Notes from July 4th, 2025

Compilation error of HBCK2 with HBase 2.6.0.
Potential fix found [HBASE-28375](https://github.com/apache/hbase-operator-tools/pull/140/files).
Investigation Ongoing

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#955](https://github.com/TOSIT-IO/tdp-collection/pull/955): status of "refactor(zookeeper): change to logback configuration". PR merged.
- [tdp-website#157](https://github.com/TOSIT-IO/tdp-website/pull/157): status of "250704 contributors report". PR merged.
- [tdp-collection#956](https://github.com/TOSIT-IO/tdp-collection/pull/956): status of "refactor(spark): remove spark2 and livy for spark2". PR merged.
- [tdp-collection-extra#221](https://github.com/TOSIT-IO/tdp-collection-extras/pull/221): status of "refactor(spark): remove spark2 and livy for spark2". PR merged.
- [tdp-collection#958](https://github.com/TOSIT-IO/tdp-collection/pull/958): status of "Zookeeper: fix service failed with error "Can not write to data directory". PR merged.
- [tdp-collection-extras#222](https://github.com/TOSIT-IO/tdp-collection-extras/pull/222): status of "Zookeeper: fix service failed with error "Can not write to data directory"". PR merged.
- [tdp-collection#959](https://github.com/TOSIT-IO/tdp-collection/pull/959): status of "phoenix-queryserver: fix create /var/run/phoenix-queryserver directory on boot". PR merged.


## Open Topics

### Tdp-lib
What's new:
- The update command in tdp-lib has been merged. ([tdp-lib#647](https://github.com/TOSIT-IO/tdp-lib/pull/647))
- Merge variables update and init logics. ([tdp-lib#648](https://github.com/TOSIT-IO/tdp-lib/pull/648))
- Added a wrapper that returns the git repo when a GitRepository error occurs, to make it easier to identify the problem. ([tdp-lib#655](https://github.com/TOSIT-IO/tdp-lib/pull/655))
- Replace Black with Ruff formatter. ([tdp-lib#651](https://github.com/TOSIT-IO/tdp-lib/pull/651))
- Cleaning up imports at CLI level to add them at function definition level in order to speed up imports and increase readability on the console. ([tdp-lib#654](https://github.com/TOSIT-IO/tdp-lib/pull/654))

What's Next:
- Renaming the configuration variable in the code to make the code more readable.
- Withdrawal of command tdp vars edit. Investigation ongoing.
- Withdrawal of generate-stales command. Investigation ongoing.

### Hive Iceberg
CTAS with an additional AS for data file format failed.
Potential fix found [HIVE-28482](https://github.com/apache/hive/pull/5414). Investigation ongoing.
