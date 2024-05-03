---
type: contributors
description: |
  Table migration for TDP-lib with Alembic and using a more recent java version for TDP stack 3.3
---

# Notes from May 3rd, 2024

Table migration for TDP-lib with Alembic and using a more recent java version for TDP-stack 3.3

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#834](https://github.com/TOSIT-IO/tdp-collection/pull/834): status of "feat(ranger-plugins): enable log4j for auditlogs". New feature request: Add an option to enable ranger audit logs to be sent to filesystem. PR merged.
- [tdp-observability#95](https://github.com/TOSIT-IO/tdp-observability/pull/95): status of "feat: Scrape auditlogs and add dashboard". Collecting ranger audit logs with Promtail and add Grafana dashboards to inspect them. PR merged.
- [tdp-observability#99](https://github.com/TOSIT-IO/tdp-observability/pull/99): status of "fix(node-exporter): service file should not include configuration". Some configuration parameters are coded in service files and as a result the commands `tdp vars edit prometheus # edit prometheus_storage_retention_size`, `tdp plan reconfigure` and `tdp deploy` do not work as expected. Therefore, configuration parameters should reside in an environment file, which should be templated in config task. PR merged.

## Open topics

Manylinux2014 for HUE and JupyterHub

HUE and JupyterHub will be compiled with a manylinux2014 image based on CentOS 7 to make them compatible with more OSs.

Alembic for TDP-lib

- Alembic does not produce migration scripts compatible with several different DBMSs. It has been decided to have a migration folder for each DBMS namely `SQLite`, `Postgres` and `MySQL` containing the migration scipts.

- Alembic and SQLAlchemy are compatible with specific DBMS versions, therefore an inventory list of DBMS versions will be done to specify the compatibility with TDP-lib.

HBase-connectors

HBase-connectors for Spark2 is being used and will therefore be maintained.

More recent Java version for TDP-stack 3.3

TDP-stack 1.1 is compiled and run with Java 8. We are having a look if the new stack can be compiled with JDK 11 and run with JRE 17 and later on also compiled with JDK 17 with target Java 11.
