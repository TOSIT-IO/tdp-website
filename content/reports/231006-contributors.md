---
type: contributors
description: |
  Meeting notes covering open PRs.
---

# Notes from October 06th, 2023

## Pull Requests

- [hive#10](https://github.com/TOSIT-IO/hive/pull/10): @hamdiazz is a new contributor. PR is a backport and needs to apply patch as seen in Apache Github https://github.com/apache/hive/commit/bfa69e1077a61668b69f54dcc54609f773f89c93.
- [tdp-collection-extras#142](https://github.com/TOSIT-IO/tdp-collection-extras/pull/142) : merged
- [tdp-collection#765](https://github.com/TOSIT-IO/tdp-collection/pull/765) SparkR: Squashed in session. Merged.
- [tdp-observability#52](https://github.com/TOSIT-IO/tdp-observability/pull/52) : not ready to merge yet. Prometheus handle reload instead of restart. Let's keep restart for now to be consistent with everything in TDP.
- [tdp-collection#798](https://github.com/TOSIT-IO/tdp-collection/pull/798): merged in session
- [tdp-collection#799](https://github.com/TOSIT-IO/tdp-collection/pull/799): issues when doing transactions. May be linked to issue https://github.com/TOSIT-IO/hive/issues/10. JIRA HIVE-22546 may be backport but is a hard one. Maybe two birds with one stone ? hive#7 plus this one. @guillaume_h is pulling the topic.
    - PR does not fix the issue ACID completely, only partially. We will create a second PR to enable ACID (this one only enables compaction)
- [tdp-website#38](https://github.com/TOSIT-IO/tdp-website/pull/38): merged in session
- [tdp-website#40](https://github.com/TOSIT-IO/tdp-website/pull/40): merged in session
- [jupyterhub-pkg#4](https://github.com/TOSIT-IO/jupyterhub-pkg/pull/4): needs reviewer
- [tdp-collection-extras#151](https://github.com/TOSIT-IO/tdp-collection-extras/pull/151): @guillaume_h did not make the PR work for now, his comments should be added to the PR.
- [incubator-livy#1](https://github.com/TOSIT-IO/incubator-livy/pull/1): When starting a YARN app in batch, cant get applicationId. But works on livy 0.5.0. Errors has been tracked to the exclusion of dependency jersey-core. By removing the exclusion it works fine. @mehdibn linked JIRA issues regarding the topic, as well as the PR that introcuded the issue.
    - Incubator livy repo is still using pre 1.0 naming. Needs to be migrated.
    - Need to create the PR on the new repo
- [tdp-collection-extras#152](https://github.com/TOSIT-IO/tdp-collection-extras/pull/152): fix is quick and easy, does not fix a lot of issues regarding hue service as seen by systemctl. Merge it in session for now but more PR will follow.
- [tdp-collection#803](https://github.com/TOSIT-IO/tdp-collection/pull/803): add a placeholder code plugin to make the linter happy. Enable the use of linter later. Merged
- [tdp#90](https://github.com/TOSIT-IO/TDP/pull/90): PR that structures the release of TDP 1.1. Includes zookeeper and some minor upgrades. May be discussed in a later meeting as it was during the last minutes. Regarding the question @pacordonnier raised in comments, we may need to upgrade all dependencies in order to build the entire project easily. Otherwise one would need to build previous versions of the software and would result in a very hard to build stack.

## Open Topics

- Issue[hive#7](https://github.com/TOSIT-IO/hive/issues/7), @hamdiazz is encountering this issue. This is open to contributions.
