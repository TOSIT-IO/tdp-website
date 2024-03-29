---
type: contributors
description: |
  Meeting discussions around TDP builder and the next release preparation.
---

# Notes from June 2nd, 2023

## Validated PRs

- Variable refactoring in tdp-cluster (applicable in tdp-extras).
- Release preparation for TDP 1.0.

## Miscellaneous

- Release validation with tests.
- tdp-lib binary updates.
- Acknowledge the lack of upgrade procedure for the moment.
- No idempotence in TDP builder.
- tdp-lib development and group name refactoring aligned with component names.
- Discussions relative to functionnal tests after deployment and the supporting framework (eg: pytest, pyinfra, ...).
- Upgrade of Ansible and Python 3.9 for RHEL8.
- host and playbook resolution, optional playbook.

## PRs in discussion

- PR logs jupyterhub, log4J/jupyter unified logs.
- PR TDP builder, issue relative to the docker context with various development builds (maven,gradle, ...), Kubernetes compatiblity.
- Potential re-design of TDP Builder, maybe with one Docker image per projet.
