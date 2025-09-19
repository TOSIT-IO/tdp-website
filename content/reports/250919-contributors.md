---
type: contributors
description: |
  Investigation of changes in Hive behaviour between TDP1 and TDP2 in progress
---

# Notes from September 19th, 2025

Investigation of changes in Hive behaviour between TDP1 and TDP2 in a production environment are in progress.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#155](https://github.com/TOSIT-IO/tdp-website/pull/155): status of " feat(pages): created tables for stack 2.0". PR merged.
- [tdp-collection#974](https://github.com/TOSIT-IO/tdp-collection/pull/974): status of "feat/lightweight topology". PR merged.
- [tdp-extras#228](https://github.com/TOSIT-IO/tdp-collection-extras/pull/228): status of "feat/lightweight topology". PR merged.
- [tdp-dev#9](https://github.com/TOSIT-IO/tdp-dev/pull/9): status of "Refactor/lightweight". PR merged.
- [tdp-collection#973](https://github.com/TOSIT-IO/tdp-collection/pull/973): status of "refactor(ranger-kms): condition kms ha configuration when more than 1…". PR merged.
- [tdp-website#165](https://github.com/TOSIT-IO/tdp-website/pull/165): status of "feat(reports): contributors report of the September 12th 2025". PR merged.
- [tdp-collection#975](https://github.com/TOSIT-IO/tdp-collection/pull/975): status of "refactor: share access_fqdn function". PR merged.
- [tdp-collection#977](https://github.com/TOSIT-IO/tdp-collection/pull/977): status of "fix: add condition to skip play if spark_client group is undefined". In progress.
- [tdp-extras#229](https://github.com/TOSIT-IO/tdp-collection-extras/pull/229): status of "refactor(jupyterhub): set jupyterhub_log_rfa_maxfilesize_mb to mb". PR merged.
- [tdp-extras#230](https://github.com/TOSIT-IO/tdp-collection-extras/pull/230): status of "refactor(hue): change hue_log_rfa_maxfilesize_mb from decimal to byna…". PR merged.
- [tdp-observability#137](https://github.com/TOSIT-IO/tdp-observability/pull/137): status of "refactor: create and use a plugin to compute observability data". In progress.
- [tdp-lib#675](https://github.com/TOSIT-IO/tdp-lib/pull/675): status of "Fix script that generates meta playbooks". Draft.
- [tdp-collection#972](https://github.com/TOSIT-IO/tdp-collection/pull/972): status of "refactor(hive): moves db configs to hive-site". Draft.

## Open Topics

### TDP Table stack

Upcoming table updates for observability and tag updates on TDP websites

### Minimal version of  topology

Reflection on a potential minimal topology version for TDP deployment. This version would be without Ranger KMS, without Hue, without HTTPS, and would mainly target extras.

### Spark Iceberg

With a SparkSessionCatalog defined upstream, the drop table command does not work correctly. It does not delete the data in HDFS, even if the external.table.purge parameter is set to true.
One solution would be to call the catalogue once the session has started, rather than when it is created.
