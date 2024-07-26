---
type: contributors
description: |
  Issues with Livy.
---

# Notes from July 26th, 2024

Issues with Livy.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#105](https://github.com/TOSIT-IO/tdp-website/pull/105): status of "feat(reports): contributors' report 240719". PR merged.
- [tdp-collection-extras#180](https://github.com/TOSIT-IO/tdp-collection-extras/pull/180): status of "feat(livy): activate recovery mode for livy". PR merged.
- [tdp-collection-extras#181](https://github.com/TOSIT-IO/tdp-collection-extras/pull/181): status of "Jupyter refactor". The PR still needs a review and cluster deployment test before merging.

## Open topics

Concerning Livy, another patch has been added. It removes the exclusion of the jersey-core dependency. However, Livy still has issues tracking the status in Yarn, so work continues on this component.
