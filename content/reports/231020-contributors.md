---
description: |
  Meeting notes covering open PRs.
--- 
# Meeting notes October 20th, 2023

## General notes

Project is actively preparing for the release of TDP 1.1 The proposed bill of materials will be published under the project and is currently is a PR [tdp#90](https://github.com/TOSIT-IO/TDP/pull/90).

The focus of the release is to create coherence with upstreams Apache repositories as well as fixing minor issues.

## Pull Requests

- [tdp-observability#52](https://github.com/TOSIT-IO/tdp-observability/pull/52) : @kpgtek will review. DGFIP manages the subject
- [tdp-collection#799](https://github.com/TOSIT-IO/tdp-collection/pull/799): no updates so far
- [hive#10](https://github.com/TOSIT-IO/hive/pull/10): backports was not working but was backporting patch from branch master (hive 4). There is another patch available that targeted branch-3. @hamdiazz is trying to backport
- [tdp#90](https://github.com/TOSIT-IO/TDP/pull/90): Add specific commit from where fork was made for Hbase. Ranger, we rebase the branch 2.0 and push force. Job for @PACordonnier
- [hive#7](https://github.com/TOSIT-IO/hive/pull/7): lets revert old PR that enables the problem. If problem resurfaces we should investigate
- [tdp-dev](https://github.com/tOSIT-IO/tdp-dev): new installation procedure with TDP lib inside a VM. Lets try this solution as a way to develop on TDP. To install TDP on end-user environment, a documentation needs to be provided.
- [tdp-observability#57](https://github.com/TOSIT-IO/tdp-observability/pull/53): some files were forgotten with the PR. Lets use them
- [tdp-collection-extras#155](https://github.com/TOSIT-IO/tdp-collection-extras/pull/155): needs reviewers
- [tdp-collection#808](https://github.com/TOSIT-IO/tdp-collection/pull/808) and  [tdp-collection#811](https://github.com/TOSIT-IO/tdp-collection/pull/811): team needs to look and should be discussed in a later meeting.
