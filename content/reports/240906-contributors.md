---
type: contributors
description: |
  Replace the actual TDP-dev project with a new development environment.
---

# Notes from September 6th, 2024

Replace the actual TDP-dev project with a new development environment.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-getting-started#309](https://github.com/TOSIT-IO/tdp-getting-started/pull/309). status of "refactor: changed hive_jdbc_connector_package to hive_jdbc_connector_…".PR merged.
- [tdp-website#108](https://github.com/TOSIT-IO/tdp-website/pull/108): status of "feat(reports): contributors' report 240809". PR merged.
- [tdp-collection-extras#197](https://github.com/TOSIT-IO/tdp-collection-extras/pull/197): status of "feat(firewall): add jupyter hub and livy to firewall". PR merged.
- [tdp-collection-extras#198](https://github.com/TOSIT-IO/tdp-collection-extras/pull/198): status of "feat(jupyter): add hub bind url". Have to resolve conflicts first with PR 197.
- [tdp-collection#873](https://github.com/TOSIT-IO/tdp-collection/pull/873): status of "fix: ansible.builtin.copy dest should specify full filename". PR merged.
- [tdp-observability#109](https://github.com/TOSIT-IO/tdp-observability/pull/109): status of "fix: ansible.builtin.copy dest should specify full filename". PR merged.
- [tdp-collection-extras#200](https://github.com/TOSIT-IO/tdp-collection-extras/pull/200): status of "fix: ansible.builtin.copy dest should specify full filename". PR merged.
- [tdp-getting-started#310](https://github.com/TOSIT-IO/tdp-getting-started/pull/310). status of "fix(dev): add the variable certs_dir".PR merged.
- [tdp-collection#875](https://github.com/TOSIT-IO/tdp-collection/pull/875): status of "feat: globalize root_dir variables". PR merged.
- [tdp-collection#870](https://github.com/TOSIT-IO/tdp-collection/pull/870): status of "869 Create ranger_solr_log_dir". PR merged.
- [tdp-observability#111](https://github.com/TOSIT-IO/tdp-observability/pull/111): status of "fix: node-exporter group should be 'node-exporter'". node-exporter user should not be in hadoop group but in its own node-exporter group. However,the hadoop group should be added as secondary group before merging.

## Open topics

We will change the MySqL connector in the TDP default variables to Postgres.

Replace the actual TDP-dev project with a new development environment which will use containers for each TDP manager component (Lib, Server and UI). The goal is also to only need Vagrant and Docker as requirements and no other dependency.
