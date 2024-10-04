---
type: contributors
description: |
  Solution to launch the VMs in TDP-dev.
---

# Notes from October 4th, 2024

Solution to launch the VMs in TDP-dev.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#111](https://github.com/TOSIT-IO/tdp-website/pull/111): status of: "feat(reports): 240927 contributors' report". PR merged.
- [tdp-collection#878](https://github.com/TOSIT-IO/tdp-collection/pull/878): status of "jmx and jmx-exporter configuration and authentification". No port was exposed for JMX until now. There was probably a confusion between JMX and JMX-exporter. Moreover, all JMX-exporter Ansible tasks for each service have been centralized into one task which has been put in the `common` role. Before merging the PR, the service ports in `tdp_cluster.yml` must be put back in order of the port number.
- [tdp-collection-extras#203](https://github.com/TOSIT-IO/tdp-collection-extras/pull/203): status of "jmx and jmx-exporter configuration and authentification". Same as PR #878 in tdp-collections. Has to be merged after the other mentioned PR.
- [phoenix-queryserver#7](https://github.com/TOSIT-IO/phoenix-queryserver/pull/7): status of "Backport python3 fixes". Backported the `PHOENIX-6762` and `PHOENIX-6704` patches which are present in the `-fix` branch. PR merged.

## Open topics

TDP-dev should be deployed on virtual machines using Vagrant which is installed on the host directly with Python3 and Ansible instead of having a container which deploys the VMs on the host. This solution will be easier to maintain.
