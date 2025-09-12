---
type: contributors
description: |
  Detected Hive Table Behavior Change and Monitoring Migration
---

# Notes from September 12th, 2025

Detected Hive Table Behavior Change between TDP1 and TDP2. Work is in progress to replace Promtail with Grafana Alloy.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [TDP#104](https://github.com/TOSIT-IO/TDP/pull/104): status of "Refactor/revert builder". PR merged.
- [tdp-website#155](https://github.com/TOSIT-IO/tdp-website/pull/155): status of "created tables for stack 2.0". Ongoing investigations.
- [tdp-website#164](https://github.com/TOSIT-IO/tdp-website/pull/164): status of "contributors report of the September 5th 2025". PR merged.
- [tdp-dev#8](https://github.com/TOSIT-IO/tdp-dev/pull/8): status of "add tdp v2 stack releases". PR merged.
- [tdp-dev#9](https://github.com/TOSIT-IO/tdp-dev/pull/9): status of "Refactor/lightweight". Ongoing investigations.
- [tdp-dev#10](https://github.com/TOSIT-IO/tdp-dev/pull/10): status of "add phoenix-quaeryserver tests". PR merged.
- [tdp-observability#136](https://github.com/TOSIT-IO/tdp-observability/pull/136): status of "fix pre-flight error on grafana_database configuration". PR merged.
- [tdp-collection#969](https://github.com/TOSIT-IO/tdp-collection/pull/969): status of "standardise maxbackupindex for logs". PR merged.
- [tdp-collection#971](https://github.com/TOSIT-IO/tdp-collection/pull/971): status of "standardise maxbackupindex for logs". Investigation Ongoing.
- [tdp-collection#972](https://github.com/TOSIT-IO/tdp-collection/pull/972): status of "moves db configs to hive-site". Ongoing investigations.
- [tdp-collection-extras#225](https://github.com/TOSIT-IO/tdp-collection-extras/pull/225): status of "set log level to ERROR for errorlog handler". PR merged.
- [tdp-collection-extras#227](https://github.com/TOSIT-IO/tdp-collection-extras/pull/227): status of "upgrade livy server". PR merged.


## Open Topics

### Hive

Different behavior between TDP 1 (Hive 3) and TDP 2 (Hive 4) has been detected.  
When creating a table, it should be managed by default, as in TDP 1, but in TDP 2 it is set as external by default.  
The behavior in TDP 2 is not the same as in TDP 1.  
Investigations are ongoing to resolve this issue.

### Monitoring

Work is in progress to replace Promtail with Grafana Alloy.
