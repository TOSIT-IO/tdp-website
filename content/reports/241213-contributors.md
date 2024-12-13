---
type: contributors
description: |
  Issue and resolution of Spark History Server in the TDP stack 3.3.
---

# Notes from December 13th, 2024

Issue and resolution of Spark History Server in the TDP stack 3.3.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#122](https://github.com/TOSIT-IO/tdp-website/pull/122): status of "feat(reports): contributors' report of 6th of December 2024". PR merged.
- [tdp-collection#899](https://github.com/TOSIT-IO/tdp-collection/pull/899): status of "Add arbitrary OPTS to env.sh". It adds garbage collect configuration to the hadoop daemon. There are still some corrections to do before merging.

## Open topics

For the next TDP stack with Hadoop 3.3.6, Spark History Server from the Spark version 3.5.3 has issues displaying the Web UI since it needs in a kerberized cluster the Javax Servlet Jar file which is shaded in Hadoop. It has been decided to unshade the dependency in Hadoop and a patch has been provided.
