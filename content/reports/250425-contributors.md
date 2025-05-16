---
type: contributors
description: |
  Preparing TDP2 development
---

# Notes from April 25th, 2025
 
Knox 2.0 has a parameter for redeploying topologies when Knox is restarted.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#147](https://github.com/TOSIT-IO/tdp-website/pull/147): status of “contributors report of the April 18th 2025”. PR merged.
- [TDP#102](https://github.com/TOSIT-IO/TDP/pull/102): status of “feat(tdp-builder): new tdp-builder based on apache hadoop 3.3.6 builder image”. PR merged.
- [tdp-collection#937](https://github.com/TOSIT-IO/tdp-collection/pull/937): status of “YARN and JHS trough knox should support query parameters”. Ongoing investigations.
- [zookeeper#2](https://github.com/TOSIT-IO/zookeeper/pull/2): status of “fix(packaging): add lib and docs/apidocs directory with permissions”. PR closed.
- [tdp-collection#921](https://github.com/TOSIT-IO/tdp-collection/pull/921): status of “Refactor/hbase 2.5”. Ongoing investigations.

## Open Topics

### Knox
Knox 1.6.1 only looks at the topology files and not its service files when it restarts. If a service is modified within a topology that has already been deployed, Knox 1.6.1 is unable to take this into account and only sees that the topology has already been deployed. 
If a service is modified, the topologies concerned must be forced to be redeployed.

### Hbase
The switch to log4j2 in Hbase 2.5 causes issues. 
Hbase 2.5 works with log4j1 and the use of log4j1.2-API but when using the default Hbase configurations of log4j2 it doesn't work.

### Zookeeper 
Some directories in the Zookeeper archive do not have the correct permissions. Set up a true recursive to manage permissions. Check the behaviour of changes in permissions on symbolic links and act as appropriate.
