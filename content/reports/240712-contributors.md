---
type: contributors
description: |
  PR tdp-collection#852.
---

# Notes from uly 12th, 2024

PR tdp-collection#852.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#850](https://github.com/TOSIT-IO/tdp-collection/pull/850): status of "spark2|3: add ha support for spark-hs". Alternative PR 852 (status of "Refactor kerberos spnego").
- [tdp-website#103](https://github.com/TOSIT-IO/tdp-website/pull/103): status of "feat(reports): 050724 contributors report". PR merged.
- [tdp-collection#852](https://github.com/TOSIT-IO/tdp-collection/pull/852): status of "Refactor kerberos spnego". Alternative to PR 850 putting several principals in one keytab. Still in draft, since a fail option needs to be integrated where the ansible-deployment fails if not deployed on all hosts and also still needs to be further tested.
- [tdp-collection#853](https://github.com/TOSIT-IO/tdp-collection/pull/853): status of "feat: decommission playbooks". Decommissioning of a HDFS Datanode works as expected but not for a Yarn Nodemanager. There is still some work to do. PR in draft. 
- [tdp-collection#854](https://github.com/TOSIT-IO/tdp-collection/pull/854): status of "fix: move zkfc systemd template to install". PR merged.
- [tdp-collection#855](https://github.com/TOSIT-IO/tdp-collection/pull/855): status of "fix(ranger): add whitespace in order to fix templating". Issue will be resolved with PR 852.
- [tdp-collection-extras#177](https://github.com/TOSIT-IO/tdp-collection-extras/pull/177): status of "Add daemon reload handlers in all services". PR merged.

## Open topics

Issue concerning Incubator Livy 0.8.0 with Python 3.9 and Spark 3.5.1. Can only write one line in each JupyterNotebook cell. Needs to be debugged.

Managed to compile Ranger 2.4.0 with Hive 4.0.0, but still needs to be tested in deployment.
