---
type: contributors
description: |
  Ongoing investigations to upgrade Ansible Core to version 2.18 using python 3.12. TDP2 is scheduled for release around this summer
---

# Notes from June 20th, 2025

Upgrade Ansible Core to version 2.18 using Python 3.12. TDP2 is scheduled for release around this summer.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#917](https://github.com/TOSIT-IO/tdp-collection/pull/917): status of "feat(iceberg): add iceberg to spark". PR merged.
- [tdp-collection#937](https://github.com/TOSIT-IO/tdp-collection/pull/937): status of "YARN and JHS trough knox should support query parameters". PR merged.
- [tdp-website#153](https://github.com/TOSIT-IO/tdp-website/pull/153): status of "feat(reports): contributors report of the June 13th 2025". PR merged
- [tdp-lib#647](https://github.com/TOSIT-IO/tdp-lib/pull/647): status of "Add the tdp vars update command". Ongoing investigations.
- [tdp-collection-extras#220](https://github.com/TOSIT-IO/tdp-collection-extras/pull/220): status of "feat(firewall): add spark_client ports to firewall". PR merged.

## Open Topics

### Ansible

Ongoing investigations to upgrade Ansible Core to version 2.18 using Python 3.12.

### TDP2

TDP2 is scheduled for release around this summer. The software stack will be compiled using JDK 8 and executed using JRE 8. Investigations will be conducted to determine whether it is feasible to run the entire stack, excluding Hadoop, with JRE 17.

The operating system will be Rocky Linux 8.

Investigations have been conducted to update YARN Spawner so it can work with the latest version of JupyterHub. There is already an open issue about this, and the root cause appears to be a function that became asynchronous starting with JupyterHub 3. Although a [pull request](https://github.com/jupyterhub/yarnspawner/issues/24) was submitted to address the problem, it was never merged because it does not work as intended.
