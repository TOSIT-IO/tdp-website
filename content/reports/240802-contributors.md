---
type: contributors
description: |
  Testing stacks based on Hadoop 3.3 and Hadoop 3.4.
---

# Notes from August 2nd, 2024

Testing stacks based on Hadoop 3.3 and Hadoop 3.4.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#852](https://github.com/TOSIT-IO/tdp-collection/pull/852): status of "Refactor kerberos spnego". PR merged.
- [tdp-collection#855](https://github.com/TOSIT-IO/tdp-collection/pull/855): status of "fix(ranger): add whitespace in order to fix templating". Might not be relevant anymore since tdp-collection#852 has been merged. It must still be tested.
- [tdp-collection-extras#181](https://github.com/TOSIT-IO/tdp-collection-extras/pull/181): status of "Jupyter refactor". PR merged.
- [tdp-collection-extras#187](https://github.com/TOSIT-IO/tdp-collection-extras/pull/187): status of "remove unused spark notebooks". Turned hard coded parameters into variables. PR merged.
- [tdp-collection#862](https://github.com/TOSIT-IO/tdp-collection/pull/862): status of "fix: mysql-connector-java install". The mysql-connector-java cannot be installed with `yum install` like the Postgres connector. Therefore, it has been decided to install the connector of the DBMS we are using in the collection TDP prerequisits instead. The PR will delete the installation process in this collection once the PR in the TDP prerequisits collection has been merged.
- [tdp-website#106](https://github.com/TOSIT-IO/tdp-website/pull/106): status of "feat(reports): 260724 contributors report". PR merged.

## Open topics

There is the same issue in both TDP clusters with stack based on Hadoop-3.1 and Hadoop-3.3 when decommissioning a Yarn nodemanager. In both stacks the active resourcemanager has to be restarted in order to take into account the decommissioning while official documentation states that a simple `yarn rmadmin -refreshNodes` command is sufficient. The procedure will be tested in a HDP cluster for comparison.

DGFIP will use spark-3.5.1 with the hadoop stack 3.1.1. The livy 0.8.0 of the TDP repositories which is being compiled finally works with spark-3.5.1 and python 3.9.

EDF has issues with Hive 4.0.0 and Kerberos when launching beeline for the stack based on Hadoop-3.6.

Adaltas is testing a stack based on Hadoop-3.4.
