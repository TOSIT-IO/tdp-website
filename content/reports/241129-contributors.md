---
type: contributors
description: |
  Versions and patching for Hadoop-3.3 stack components.
---

# Notes from November 29th, 2024

Versions and patching for Hadoop-3.3 stack components.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#894](https://github.com/TOSIT-IO/tdp-collection/pull/894): status of "feat(tdp_vars_defaults): changes in order tu use phoenix via knox". PR merged.

## Open topics

For the Hadoop stack 3.3 we will try to stay as close as possible to the Apache versions and avoid patching as much as possible.

The versions of the stack would be:

- Hadoop-3.3.6
- Hive-3.1.3
- HBase-2.5.10
- Spark 3.5.3
- Phoenix-5.1.3-hbase-2.5
- Phoenix-Queryserver-6.0.0
- Knox-2.0.0
- Ranger-2.4 or Ranger-2.5
- Zookeeper-3.8.4 or above

Minor changes may appear during the process.

If possible, playbooks should be able to deploy both stacks, otherwise the playbooks for the first stack will be frozen.
