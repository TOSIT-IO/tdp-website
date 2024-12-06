---
type: contributors
description: |
  Checking the `pom.xml` of the TDP Stack-3.3 components for compilation.
---

# Notes from December 6th, 2024

Checking the `pom.xml` of the TDP Stack-3.3 components for compilation.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#121](https://github.com/TOSIT-IO/tdp-website/pull/121): status of "feat(reports): report of the 29th of November 2024". PR merged.
- [tdp-observability#122](https://github.com/TOSIT-IO/tdp-observability/pull/122): status of "fix(node-exporter): ntp collector is deprecated". PR merged.
- [tdp-observability#124](https://github.com/TOSIT-IO/tdp-observability/pull/124): status of "fix(grafana): python dashboard uptime panel inacurate". Deleted the logtime display since it is inacurate for Hue but the metric is still collected. PR merged.
- [tdp-observability#126](https://github.com/TOSIT-IO/tdp-observability/pull/126): status of "feat(promtail): merge "warn" and "warning" log levels". Renamed "warn" to "warning" in the promtail pipelines. PR merged.
- [tdp-collection#896](https://github.com/TOSIT-IO/tdp-collection/pull/896): status of "fix(ranger-admin): use local timezone for ranger-admin". It is not consistent with other logs which show local timezones (for instance +01:00 instead of Z). PR merged.
- [tdp-dev#5](https://github.com/TOSIT-IO/tdp-dev/pull/5): status of "Feat/container". Created a project that creates all TDP infrastructure and deploys TDP for development purposes. PR merged.

## Open topics

TDP stack-3.3:

- Tez 0.10.2 is two years old so Tez 0.10.4 will be tested instead.
- For Zookeeper, Hadoop, Spark, HBase, Ranger the `-basic` branches have been added to the TOSIT repository's projects without great modification compared to the Apache version.
- Work to do on Hive 3 since a lot of patches have been added since the release and see if they are strictly necessary.
- For Knox check if the `purejavacomm` dependency is necessary in order to not add a new repository in the `pom.xml`.
- Still the `-basic` branches to do for Tez, Phoenix, Phoenix-Queryserver and HBase-Operator-Tools.
