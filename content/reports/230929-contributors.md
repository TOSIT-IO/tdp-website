---
description: |
  Meeting notes covering open PRs.
--- 
# Meeting notes September 29th, 2023

## Pull Requests

- [tdp-collection#765](https://github.com/TOSIT-IO/tdp-collection/pull/765): @guillaume_h pushed content on it. Commit tree on the PR needs some adjustements and may need a new PR since it was made by old contributor.
- [hadoop#5](https://github.com/TOSIT-IO/hadoop/pull/5): needs answers by the author of the PR
- [tdp-collection-extras#147](https://github.com/TOSIT-IO/tdp-collection-extras/pull/147): Needs reviewer, needs hue migration from 4.10 to 4.11 [#149](https://github.com/TOSIT-IO/tdp-collection-extras/pull/149)
- [tdp-collection-extras#144](https://github.com/TOSIT-IO/tdp-collection-extras/pull/144): Needs reviewer
- [tdp-observability#52](https://github.com/TOSIT-IO/tdp-observability/pull/52): Observability removes dependency on cloudalchemy and community roles. Everything is now handled in TDP's code. It also allows expected behaviour (community roles does not handle configure and restart asynchronously). One needs to create an issue regarding using own roles instead of community for grafana as well.
- [tdp-collection#799](https://github.com/TOSIT-IO/tdp-collection/pull/799): compaction enabling for Hive. Topic is actually broader than compaction:
    - Compaction is required for ACID, the flag that enables logic needs to target ACID enabling, not only compaction.
    - Issue needs to be renamed to reflect this
    - This issues raises the needs of config groups, since only one metastore needs compaction enabled on the cluster.
    - PR is not merged yet.
    - Decision regarding way of implementing config groups needs to taken for End of october.
- [tdp-collection#798](https://github.com/TOSIT-IO/tdp-collection/pull/798): 
    - Log4J1 does not actually follow ISO standard regarding log format. The PR creates an explicit standard used across components.
    - The PR also prepares the filename to be used by promtail in observability
    - Discussion regarding having the hostname in the log filename:
        - While it's usefulness is discussed, people are used to this standard. Let's keep it that way
        - Users won't be able to merge logs having the same filename on Loki. Users will still be able to merge it using other metadata.
- [tdp-website#38](https://github.com/TOSIT-IO/tdp-website/pull/38): needs reviewers
- [jupyterhub-pkg#4](https://github.com/TOSIT-IO/jupyterhub-pkg/pull/4): needs reviewers (@guillaume_h)
- [tdp#4](https://github.com/TOSIT-IO/tdp/pull/4): Projects approves moving manifests from TOSIT-IO/TDP to tdp-website
- [tdp-collection-extras#149](https://github.com/TOSIT-IO/tdp-collection-extras/pull/149): DGFIP handles the subject and agreed to. (extras#147 can be merged)
- [tdp-collection#800](https://github.com/TOSIT-IO/tdp-collection/pull/800):
    - there is an issue regarding that a component from extras (hue) is present in tdp-collection.
    - Issue can be fixed properly by having the concerned properties being dict instead of string. This way extras could inject its values directly.
    - Decsiion has been made to ignored this issue for now.
    - Issue #801 has been created to track properties that should work as dict instead of string (example being auth_to_local rules)

## Open Topics

- Config groups: in order to work on config groups, power users should provide their current config groups on a live cluster. This way TDP developers can make a informed decision on how to implement a solution to this.
    - Having the topologies included in the stale may be difficult. But maybe this feature is overengineered and some simple solutions would appropriately cover all usages
- Jupyterhub is still having issues with impersonation and kerberos. As of now, a manual kinit is required when using certain context. @mehdibn tracks this topic.
- Jupyterhub can handle session persistence but needs to store its data somewhere. While possible, HDFS may not be appropriate for this. Test storing persistence in PostgreSQL needs to be done.
