---
type: contributors
description: |
  The use of tdp-vagrant for the project tdp-dev and the use of tdp-incus for more advanced development purposes.
---

# Notes from November 08, 2024

The use of tdp-vagrant for the project tdp-dev and the use of tdp-incus for more advanced development purposes.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#888](https://github.com/TOSIT-IO/tdp-collection/pull/888): status of "feat: add unix_group to tdp_observability_target". PR merged.
- [tdp-collection-extras#210](https://github.com/TOSIT-IO/tdp-collection-extras/pull/210): status of "feat: add unix_group to tdp_observability_target". PR merged.
- [tdp-observability#118](https://github.com/TOSIT-IO/tdp-observability/pull/118): status of: "fix(promtail): generate secondary group list dynamically". PR merged.
- [tdp-collection#890](https://github.com/TOSIT-IO/tdp-collection/pull/890): status of "fix(observability): promtail config for hdfs_namenode". PR merged.
- [tdp-website#116](https://github.com/TOSIT-IO/tdp-website/pull/116): status of "feat(reports): contributors' report 241025". PR merged.
- [tdp-observability#120](https://github.com/TOSIT-IO/tdp-observability/pull/120): status of: "feat: sort logs in ascending order". PR merged.
- [tdp-website#117](https://github.com/TOSIT-IO/tdp-website/pull/117): status of "Update hive and phoenix queryserver". PR merged.
- [tdp-collection#892](https://github.com/TOSIT-IO/tdp-collection/pull/892): status of "fix(observability): status of "promtail config for ranger_solr". PR merged.

## Open topics

For the project `tdp-dev` the submodule `tdp-vagrant` with libvirt as default provider will be used to launch the VM's and not `tdp-incus`. The reason is that Vagrant is much easier to use than Incus and more common. However, since Incus has got more functionalities (the possibility to manage several VMs in different physical machines, manage LXC containers ...etc), `tdp-incus` will be maintained for more advanced development purposes.
