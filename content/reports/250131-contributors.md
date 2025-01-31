---
type: contributors
description: |
  Work will be continued on Hive3 and Hive4 for TDP stack 2.0.
---

# Notes from January 31st, 2025

Work will be continued on Hive3 and Hive4 for TDP stack 2.0.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#130](https://github.com/TOSIT-IO/tdp-website/pull/130): status of "feat(reports): contributors report 24th of january 2025". PR merged.
- [tdp-collection#906](https://github.com/TOSIT-IO/tdp-collection/pull/906): status of "fix: remove livyserver haprovider". Modification which have been discussed last week have been made. PR merged.

## Open topics

Issues whith Beeline when using Hive3 compiled with Hadoop 3.3.6 in the TDP stack 2.0. Hive3 compiled with Hadoop 3.1.1 does not present this issue in the TDP stack 2.0, but it isn't optimal. Basic tests all pass in the TDP stack 2.0 when using Hive4. However, in this case a backport patch from Ranger 3.0.0-SNAPSHOT must be introduced in Ranger 2.5.0 for the Ranger Hive plugin to work with Hive4. Work will be continued on both Hive4 and Hive3 for TDP stack 2.0.
