---
type: contributors
description: |
  Only Knox is not in HA.
---

# Notes from July 25th, 2025

Only Knox is not in HA.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#850](https://github.com/TOSIT-IO/tdp-collection/pull/850): status of "spark3: add ha support for spark-hs". PR merged.
- [tdp-collection#857](https://github.com/TOSIT-IO/tdp-collection/pull/857): status of "yarn: add ha support for jhs". PR merged.
- [tdp-collection#859](https://github.com/TOSIT-IO/tdp-collection/pull/859): status of "hdfs: add ha to Httpfs ha". PR merged.
- [tdp-collection#961](https://github.com/TOSIT-IO/tdp-collection/pull/961): status of "feat(spark3): clarify spark HA configuration". PR merged.
- [tdp-collection-extras#179](https://github.com/TOSIT-IO/tdp-collection-extras/pull/179): status of "jupyterhub: add ha for jupyterhub-server". PR merged.
- [tdp-website#159](https://github.com/TOSIT-IO/tdp-website/pull/159): status of "feat(reports): contributors report of the July 18th 2025". PR merged.

## Open Topics

### tdp-lib
What's new:
- A lot of work for imports, which resolves the large number of warnings by only loading Ansible when the CLI starts.
- Add the --cwd option [tdp-lib#669](https://github.com/TOSIT-IO/tdp-lib/pull/669)

What's Next:
- Add different tests
- Correction of command plan reconfigure
