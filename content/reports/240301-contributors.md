---
type: contributors
date: 2024-03-01
description: |
  Discussion about the compilation of TDP 1.1 stack.
---

# Meeting notes March 1st, 2024

Discussion about the compilation of TDP 1.1 stack.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#74](https://github.com/TOSIT-IO/tdp-website/pull/74): Contributors' meeting of 23rd of February 2024. PR merged.
- [TDP#95](https://github.com/TOSIT-IO/TDP/pull/95): Bash script to check if TDP branch has been rebased on the coresponding build branch in each project. PR merged.
- [tdp-observability#89](https://github.com/TOSIT-IO/tdp-observability/pull/89): Remove postgres-exporter role. Since PostgreSQL is not mandatory for TDP observability. PR merged.
- [tdp-collection-prerequisites#101](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/101): Remove prerequisites for postgres_exporter. linked to the previous PR tdp-observability#89. PR merged.
- [tdp-observability#91](https://github.com/TOSIT-IO/tdp-observability/pull/91): Enable multiple dashboard directories. Without PR the dashboard provisioning works only with one import directory. PR merged.

## Open topics

TDP stack :

- Still have to rename the branches of the TDP 1.1 stack.

- Working at EDF on the TDP stack compilation with Hadoop version 3.3.

- Decided to add in each project's README.md a section called `Build notes` which includes a short desciption of the functional patches (not version updates) that have been added since their release.
