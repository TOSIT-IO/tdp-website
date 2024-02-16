---
type: contributors
date: 2024-02-16
description: |
  Issue with reverse DNS lookup.
---

# Meeting notes February 16th, 2024

Issue with reverse DNS lookup.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#68](https://github.com/TOSIT-IO/tdp-website/pull/68): Added project's logo in homepage. Eduard approves it but must still be approved by Olivier.
- [tdp-observability#85](https://github.com/TOSIT-IO/tdp-observability/pull/85): Enable passing scrape options to Prometheus configuration file, via observability_tdp_targets dictionary. PR is merged.
- [tdp-observability#87](https://github.com/TOSIT-IO/tdp-observability/pull/87): Have a dashboard for python based services (Hue, JupyterHub). PR still in review since it is related to PR tdp-collection-extras#174 which has an issue.
- [tdp-collection-extras#174](https://github.com/TOSIT-IO/tdp-collection-extras/pull/174): Monitor Hue & JupyterHub metrics. PR is still in process. Gets an 404 error when trying to get the metrics.

## Open topics

- Products doing reverse DNS lookup causing some issues. Adding `dnsmasq` for reverse DNS lookup of `etc/host` partially solves the issue. Find a solution for reverse DNS lookup to be configured in `tdp-collection-prerequisites`.

- Spark: created branch `branch-3.2.4-build-new` to solve [issue 6](https://github.com/TOSIT-IO/spark/issues/6) discussed last week.
