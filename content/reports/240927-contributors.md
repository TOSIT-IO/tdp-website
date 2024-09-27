---
type: contributors
description: |
  General advancement of the TDP-dev project and the Hadoop stack 3.3.6.
---

# Notes from September 27th, 2024

General advancement of the TDP-dev project and the Hadoop stack 3.3.6.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection-extras#194](https://github.com/TOSIT-IO/tdp-collection-extras/pull/194): status of "refactor: hue release". PR merged.
- [tdp-collection#880](https://github.com/TOSIT-IO/tdp-collection/pull/880): status of "refactor(observability): move observability_targets into tdp". PR merged.
- [tdp-observability#115](https://github.com/TOSIT-IO/tdp-observability/pull/115): status of "refactor: move tdp observability_targets into tdp collection". Counterpart of PR tdp-collection#880. PR merged.
- [tdp-website#110](https://github.com/TOSIT-IO/tdp-website/pull/110): status of "feat(reports): contributors' report 240920". PR merged.
- [tdp-collection#882](https://github.com/TOSIT-IO/tdp-collection/pull/882): status of "Set latest component versions". PR merged.

## Open topics

Issue with Phoenix Queryserver working with Python 3 in the `basic` release version `6.0.0-0.1`. The issue has been resolved in the `fix` release version `6.0.0-0.1`, however, the patch must be backported to the `basic` release for it to work properly. Moreover, the `fix` release version must be changed from `6.0.0-0.1` to `6.0.0-1.0`.

Concerning TDP-dev, the images of the containerized `tdp-lib` and `libvirt-client` (container to launch VMs on your host) should be adjusted to be the same everywhere. At the moment the user inside the container is set when the images are built. The user should instead dynamically change at runtime. Both images have not yet been published and Pull Requests concerning them have not yet been merged.

On the Hadoop stack 3.3.6, all components are working except Hive 3 for the moment.

Once the TDP-dev project is finished, testing the deployment of TDP on other OS such as Ubuntu will start.
