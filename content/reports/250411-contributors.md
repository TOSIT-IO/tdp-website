---
type: contributors
description: |
  Preparing TDP2 development
---

# Notes from April 11th, 2025
 
All 1.0.0 tags have been created on the various TDP repositories.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#144](https://github.com/TOSIT-IO/tdp-website/pull/144): status of “250404 contributors report”. Merged.
- [tdp-collection#925](https://github.com/TOSIT-IO/tdp-collection/pull/925): status of “feat(versioning): to version 1.0.0”. Merged.
- [tdp-collection-extras#217](https://github.com/TOSIT-IO/tdp-collection-extras/pull/217): status of “feat(versioning): to version 1.0.0”. Merged.
- [tdp-observability#131](https://github.com/TOSIT-IO/tdp-observability/pull/131): status of “feat(versioning): to version 1.0.0”. Merged.
- [tdp-collection-prerequisites#112](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/112): status of “feat(versioning): to version 1.0.0”. Merged.
- [tdp-lib#664](https://github.com/TOSIT-IO/tdp-lib/pull/644): status of “feat(versioning): to version 1.0.0”. Merged.
- [TDP#102](https://github.com/TOSIT-IO/TDP/pull/102): status of “refactor(tdp-builder): use new tdp-builder based on ubuntu 20.04”. Not Merged.
- [tdp-dev#102](https://github.com/TOSIT-IO/tdp-dev/pull/6): status of “feat: added test framework”. Merged.

## Open Topics

### Tdp Builder

Build problem on Ranger with version 2.6.0. The build of this version of Ranger requires an upgrade to Ubuntu 20.04 on the docker image of the TDP builder. This upgrade is not required for any other TDP component. It even creates build errors on some components. However, it is useful for building recent components such as Ranger 2.6.0 or Hadoop 3.4.1. So there will be the creation of a tag which will make it easy to change the Ubuntu version on the [TDP](https://github.com/TOSIT-IO/TDP/) project.

### Hbases

Modification of Hbase communication ports due to conflict with ports used by Zookeeper in TDP2.

### Kafka

Kafka will no longer be part of [tdp-collection-extra](https://github.com/TOSIT-IO/tdp-collection-extras/) in TDP 2.