---
type: contributors
description: |
  Rocky Linux 9 will be used for TDP 2.0.
---

# Notes from January 24th, 2025

Rocky Linux 9 will be used for TDP 2.0.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#902](https://github.com/TOSIT-IO/tdp-collection/pull/902): status of "ranger-usersync: fix variable rangerUsersync_password hardcoded". PR merged.
- [tdp-website#127](https://github.com/TOSIT-IO/tdp-website/pull/127): status of "feat: update versioning to new behaviour of TDP second digit". PR merged.
- [tdp-website#129](https://github.com/TOSIT-IO/tdp-website/pull/129): status of "feat(reports): contributors report of the 17th of January 2025". PR merged.
- [tdp-collection#904](https://github.com/TOSIT-IO/tdp-collection/pull/904): status of "feat(knox): add livyserver3 haprovider". Do not want an automatic switch for livy at the moment so we rather going to suppress the livyserver haprovider tah adding it for livyserver3.
- [tdp-collection#905](https://github.com/TOSIT-IO/tdp-collection/pull/905): status of "fix(knox): livy servers port are hardcoded". PR merged.
- [incubator-livy-fork#7](https://github.com/TOSIT-IO/incubator-livy-fork/pull/7): status of "5 Missing thriftsserver in release". PR merged.

## Open topics

We want to activate the Spark dynamic allocation potentially already in the first TDP stack. Investigations will start and see how it behaves in the first stack.

We will test TDP stack 2.0 on Rocky Linux 9. The collection will have to be compatible with this OS. Work will start with the prerequisites collection.

Ranger-KMS 2.5.0 works now for TDP-2.0 thanks to a dependency which has been added when it is compiled and packaged.

We might use Knox version 1.6.1 for TDP 2.0 as the 2.0.0 version has troubles working with Hadoop 3.3.6 because of different Jersey Servelet versions.
