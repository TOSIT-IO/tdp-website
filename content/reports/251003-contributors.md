---
type: contributors
description: |
  tdp-lib: a problem between Spark and YARN has been detected
---

# Notes from October 3rd, 2025

In the tdp-lib YARN wants to create a symbolic link to the Spark3 JAR, but it cannot because Spark3 is deployed after YARN.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#167](https://github.com/TOSIT-IO/tdp-website/pull/167): status of "feat(pages): added tdp_observability components for stack 2.0". PR merged.
- [tdp-website#168](https://github.com/TOSIT-IO/tdp-website/pull/168): status of "feat(reports): contributors report of the September 26th 2025". PR merged.
- [tdp-dev#12](https://github.com/TOSIT-IO/tdp-dev/pull/12): status of "refactor(scripts): renew versions in tdp-v2-release-uris.txt". PR merged.
- [tdp-observability#145](https://github.com/TOSIT-IO/tdp-observability/pull/145): status of "eat: alertmanager 0.28". PR merged.
- [tdp-collection-extras#233](https://github.com/TOSIT-IO/tdp-collection-extras/pull/233): status of "refactor(hue): changed to dynamic yarn resourcemanager ha configuration". PR merged.
- [tdp-collection-extras#234](https://github.com/TOSIT-IO/tdp-collection-extras/pull/234): status of "remove kafka and airflow from collection". PR merged.
- [tdp-collection#972](https://github.com/TOSIT-IO/tdp-collection/pull/972): status of "refactor(hive): moves db configs to hive-site". PR merged.

## Open Topics

### tdp-lib

- During a cluster failure, the command to stop the process was launched, but it raised an error because it required the Postgres database: tdp-lib was connected to Postgres, and it was down. It has been discussed to create meta-scripts to start, stop, and restart.

- A problem between Spark and YARN has been detected: YARN wants to create a symbolic link to the Spark3 JAR, but it cannot because Spark3 is deployed after YARN. This seems to come from the way dynamic allocation has been scheduled. The DAG needs to be modified.
