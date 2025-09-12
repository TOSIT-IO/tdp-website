---
type: contributors
description: |
  Release of a TDP version aligned with master to fix DataFrame creation issue on Jupyter
---

# Notes from September 5th, 2025

Develop two TDP deployment topologies in order to run an HA version of TPD with two edges and a lightweight version.
The lightweight version will only support HA on HDFS and will be able to support spark jobs requiring few resources.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [TDP#104](https://github.com/TOSIT-IO/TDP/pull/104): status of "Refactor/revert builder". PR merged.
- [tdp-website#163](https://github.com/TOSIT-IO/tdp-website/pull/163): status of "contributors report of the August 29th 2025". PR merged.
- [tdp-observability#135](https://github.com/TOSIT-IO/tdp-observability/pull/135): status of "Update grafana to 12.1.1". PR merged.
- [tdp-collection#969](https://github.com/TOSIT-IO/tdp-collection/pull/969): status of "standardise maxbackupindex for logs". Investigation Ongoing.
- [tdp-collection#970](https://github.com/TOSIT-IO/tdp-collection/pull/970): status of "variabilize kms-audit log's pattern". PR merged.
- [tdp-collection#966](https://github.com/TOSIT-IO/tdp-collection/pull/966): status of "Refactor/decommissioning check". PR merged.


## Open Topics

### TDP-DEV 2.0

Potential transition to TDP-DEV version 2.0 requiring the publication of the component builds needed for the TDP to work.

### Livy

Addition of a critical patch to Livy last week. This component must be built from the master branch, not the release branch.

### Monitoring

PromptAil is depracated and expected to reach EOL in march 2026.

### Ansible Version

The transition to Ansible version 2.16 involves switching tdp-lib to Python 3.10.
Investigation ongoing.

### Java Version

For now, TDP continues to run on Java 8 because Hadoop 3.3.6 does not support Java 17. See for a common version upgrade of all TDP components in the coming months.
