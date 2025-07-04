---
type: contributors
description: |
  Attempt to implement Python 3.10 and Python 3.12
---

# Notes from June 27th, 2025

Attempt to implement Python 3.10 and Python 3.12 on the node control. TDP lib works, but the visualisation part of TDP lib does not. Conflict with versions when upgrading.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#155](https://github.com/TOSIT-IO/tdp-website/pull/155): status of "feat(pages): created tables for stack 2.0" : Draft
- [tdp-website#154](https://github.com/TOSIT-IO/tdp-website/pull/154): status of "feat(reports): contributors report of the June 20th 2025". PR merged
- [tdp-lib#647](https://github.com/TOSIT-IO/tdp-lib/pull/647): status of "Add the tdp vars update command". PR merged
- [tdp-collection#952](https://github.com/TOSIT-IO/tdp-collection/pull/952): status of "Feat/variable ergonomy". PR merged
- [tdp-collection#954](https://github.com/TOSIT-IO/tdp-collection/pull/954): status of "feat(spark): add iceberg-mr jar to conduct operations on tables creat…". PR merged.

## Open Topics

### HBase

New compilation of Apache HBase in version 2.6.1. This version upgrade meant that we also had to compile Phoenix Query Server and Phoenix with HBase 2.6.1.

The HBase tests don't work with Python 3.12, whereas they work with Python 3.9.

### Iceberg

When an Iceberg table is created in Hive and you want to delete it in Spark, you get error 953: Hive Iceberg storage handler is missing. You can still insert and read data in the table. We have found that adding iceberg.mr jar to Spark solves this error. The basic error probably comes from the CASCADE keyword. Investigation ongoing.

### Ansible

Ansible 2.18 does not work to deploy TDP. Python 3 dnf is not available in Python 3.12. In addition, Rocky Linux 8 uses Python 3.6, so you will need to use a version of Ansible compatible with Python 3.6, as is the case for version 2.16 of Ansible.
