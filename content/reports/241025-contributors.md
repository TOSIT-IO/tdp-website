---
type: contributors
description: |
  The use of Incus instead of Vagrant in TDP-dev.
---

# Notes from October 25th, 2024

The use of Incus instead of Vagrant in TDP-dev.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [TDP#100](https://github.com/TOSIT-IO/TDP/pull/100): status of "feat(build-env): add libpam to tdp-builder". PR merged.
- [tdp-collection#888](https://github.com/TOSIT-IO/tdp-collection/pull/888): status of "feat: add unix_group to tdp_observability_target". Preparatory PR for tdp-collection-extras#210 and tdp-observability#118. Have to merge all three PRs together.
- [tdp-collection-extras#210](https://github.com/TOSIT-IO/tdp-collection-extras/pull/210): status of "feat: add unix_group to tdp_observability_target". Wait for the PR tdp-observability#118 to be merged.
- [tdp-observability#118](https://github.com/TOSIT-IO/tdp-observability/pull/118): status of "fix(promtail): generate secondary group list dynamically". Some reviews and probably refactoring have to be done.
- [tdp-website#115](https://github.com/TOSIT-IO/tdp-website/pull/115): status of "feat(reports): report for the 18th October 2024". PR merged.

## Open topics

We might use Incus instead of Vagrant in TDP-dev. It is faster than Vagrant and uses Libvirt or can even use LXC and needs less dependencies.

In TDP-dev we have decided to create a container with Firefox and Kerberos to access the components' Web UIs so that we have an environment which is reproductible.
