---
description: |
  Meeting notes covering open PRs.
--- 
# Meeting notes October 27th, 2023

## Pull Requests

- [hadoop#5](https://github.com/TOSIT-IO/hadoop/pull/5): Could be good to integrate it soon since we are preparing 1.1. We do not deploy ATS v2 so difficult to test and to have bandwidth to test. We do not pursue work on it in the next weeks.
- [collection#799](https://github.com/TOSIT-IO/tdp-collection/pull/799): Back in draft. The PR relates to the activation of Hive ACID. Hive ACID on hive 3 is still in discussion. We all agree that it could be interesting but needs thorough testing. It may be good to wait for Hive 4, wait for iceberg.
  - We need to discuss thorougly the integration of ACID with Hive 3. 
  - It needs backport of HIVE-22546 and 22633, backport from Hive 4. It comes with a lot of risk.
  - We need to revert Gauthier's commits, try to fix properly the problems (@guillaume_h works on this) and keep in mind that we could also drop hive acid altogether.

- [TDP#90](https://github.com/TOSIT-IO/TDP/pull/90) Do not include Zookeeper as component in TDP/TOSIT. For now, just set zk 3.4.14 in TDP 1.1, as a dependency. Keep zookeeper fork in alliage. Upgrade in 1.1.
  - DGFIP reverts spark 2 to a older patched version due to dependency issue.
  - Today theres is an issue with hadoop 3.1.4 and hive TDP due to guava with 2 versions being in the classpath. @pacordonnier working on the issue
- [extras#155](https://github.com/TOSIT-IO/tdp-collection-extras/pull/155): issue was only partial (thx @getse). Create new issue to add kafka and zk (https://github.com/TOSIT-IO/tdp-collection-extras/issues/156) Can merge this one, new PR will be created to fix new issue.
- [collection#808](https://github.com/TOSIT-IO/tdp-collection/pull/799): lets explicit the value pmem, since we disabled vmem. Might as well explicit the sister setting pmem. A comment has been made to the PR.
