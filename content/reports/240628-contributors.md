---
type: contributors
description: |
  Components of TDP extras collection.
---

# Notes from June 28th, 2024

Components of TDP extras collection.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [hue#2](https://github.com/TOSIT-IO/hue/pull/2): status of "refactor: build with manylinux2014 image". PR related to TDP#97 as it uses its image for the build container. It still needs an approval before being merged.
- [tdp-collection#844](https://github.com/TOSIT-IO/tdp-collection/pull/844): status of "feat(spnego): add ha support with kerberos". To be discussed, knox could also do the load balancer instead of adding one.
- [TDP#97](https://github.com/TOSIT-IO/TDP/pull/97): status of "feat(build-env): added builder for python written components". PR merged.
- [tdp-collection#847](https://github.com/TOSIT-IO/tdp-collection/pull/847): status of "fix: use v3 configuration for ranger audit log export to hdfs". Use v3 configuration instead of v2. Add commentaries before merging.
- [tdp-collection#848](https://github.com/TOSIT-IO/tdp-collection/pull/848): status of "fix: path for knox audit log on hdfs". PR merged.
- [jupyterhub#1](https://github.com/TOSIT-IO/jupyterhub/pull/1): status of "Add Readme". It explains how to package the component. PR related to TDP#97 as it uses its image for the build container. It still needs an approval before being merged.
- [tdp-collection#850](https://github.com/TOSIT-IO/tdp-collection/pull/850): status of "spark2|3: add ha support for spark-hs". Same as PR tdp-collection#844, to be discussed.

## Open topics

Added JupyterHub, JupyterLab and sparkmagic repositories in TDP. The components are included concerning JupyterHub or will be for the other two in the TDP Extras collection.

Changed the way to launch JupyterLab. Now JupyterLabs' virtual environments are preinstalled on all hosts and not via a Yarn job as it was before.

Hue displayed 401 error when performing queries on Hive. The issue has been corrected by patching Hive source code at DGFIP but not in TDP yet, a new branch will be created.

A new branch  with Spark version 3.5.1 for Hadoop stack 3.1.1 has been created to solve a security issue with Spark-3.2.4 where the proxy user can be changed via Livy. Initial tests have been passed but testing continues and it will not be the official Spark version for the Hadoop stack 3.1.1.
