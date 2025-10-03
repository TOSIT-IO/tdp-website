---
type: contributors
description: |
  Investigation of changes in Spark behaviour between TDP1 and TDP2
---

# Notes from September 26th, 2025

Iceberg tables created with Hive and Spark do not have the same default properties. For example, with the following properties:
table-override.external.table.purge and table-override.iceberg.orc.files.only.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#977](https://github.com/TOSIT-IO/tdp-collection/pull/977): status of "fix: add condition to skip play if spark3_client group is undefined". PR merged.
- [tdp-observability#137](https://github.com/TOSIT-IO/tdp-observability/pull/137): status of "refactor: create and use a plugin to compute observability data". PR merged.
- [tdp-website#166](https://github.com/TOSIT-IO/tdp-website/pull/166): status of "feat(reports): contributors report of the September 19th 2025". PR merged.
- [tdp-collection#979](https://github.com/TOSIT-IO/tdp-collection/pull/979): status of "Update meta playbooks". PR merged.
- [tdp-observability#138](https://github.com/TOSIT-IO/tdp-observability/pull/138): status of "Update meta playbooks". PR merged.
- [tdp-collection#981](https://github.com/TOSIT-IO/tdp-collection/pull/981): status of "refactor(spark): use catalog iceberg for iceberg operations and leave…". PR merged.
- [tdp-collection#982](https://github.com/TOSIT-IO/tdp-collection/pull/982): status of "fix: Move ranger_admin_password to tdp_cluster". PR merged.
- [tdp-collection#983](https://github.com/TOSIT-IO/tdp-collection/pull/983): status of "fix(ranger-kms): one 'configuration' tag to much in kms-site.xml". PR merged.
- [tdp-observability#139](https://github.com/TOSIT-IO/tdp-observability/pull/139): status of "feat: prometheus 3.5". PR merged.
- [tdp-observability#140](https://github.com/TOSIT-IO/tdp-observability/pull/140): status of "feat: node-exporter 1.9". PR merged.
- [tdp-observability#142](https://github.com/TOSIT-IO/tdp-observability/pull/142): status of "feat(topology): added leightweight topology without alertmanager". PR merged.
- [tdp-observability#143](https://github.com/TOSIT-IO/tdp-observability/pull/143): status of "feat: loki 3.5.4". PR merged.
- [tdp-dev#11](https://github.com/TOSIT-IO/tdp-dev/pull/11): status of "Refactor/tdp vars overrides". PR merged.

## Open Topics

### Iceberg

Error when deleting tables from spark session catalog that changes user behaviour. The proposal is not to use iceberg by default in spark but to force the use of iceberg with spark. This would allow the SparkSessionCatalog class issue to be bypassed by using the sparkCatalog class with iceberg instead.
