---
type: contributors
description: |
  The name of TDP Stack 2.0 and the content included on the website
---

# Notes from March 22nd, 2024

The name of TDP Stack 2.0 and the content included on the website

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#65](https://github.com/TOSIT-IO/tdp-website/pull/65): Installation guide. There are still elements missing. One of them is to have the tarball files of the components referenced somewhere in the documentation. There is also the question of how deep the documentation must go ; for instance, whether the user should be able to set up the virtual machines for TDP.
- [tdp-collection#834](https://github.com/TOSIT-IO/tdp-collection/pull/834): Enable log4j auditlogs. There are still configuration issues. One example is that log4j for Hive tries to log to the YARN configuration file. There is still work to do with the symbolic links.
- [hive#25](https://github.com/TOSIT-IO/hive/pull/25): Patches for Hive 2.3.9 on the `-fix` branch. Must first be rebased before merge.
- [tdp-website#77](https://github.com/TOSIT-IO/tdp-website/pull/77): 15th of March 2024 contributors' report. PR merged.
- [tdp-getting-started#307](https://github.com/TOSIT-IO/tdp-getting-started/pull/307): Feature for the download management. Be abale to download components' tarball by collection when executing the setup.sh file.
- [tdp-collection-extras#175](https://github.com/TOSIT-IO/tdp-collection-extras/pull/175): Fix for undefined variable in tdp_cluster. the variable `dashboard_without_workers` was not defined on `tdp-collection-extras` but in `tdp-observability` which means that the first collection could not be executed without the second one. Problem has been solved with this PR. PR merged.
- [tdp-collection-extras#176](https://github.com/TOSIT-IO/tdp-collection-extras/pull/176): Fix for Hue installation fails when postgresql group is missing. The PR fixes the issue, however we want to see if there is a simpler way to acieve this.

## Open topics

TDP stack 2.0

Question about its naming and if it includes only the core components or also the extra components and even the manager. It is still open to debate, but one proposition is that it includes all three.

Superset

Question about integrating Superset. There might be issues with multitenancy as well as integration issues in TDP. There will be a debate about its use or if an alternative component will be integrated.
