---
type: contributors
description: |
  Preparing TDP2 development
---

# Notes from April 4th, 2025
 
Building our own phoenix-queryserver release for TDP2 stack.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection-prerequisites#111](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/111): status of “ feat(postgres): updated postgres to version 17”. Merged.
- [tdp-lib#643](https://github.com/TOSIT-IO/tdp-lib/pull/643): status of "feat: upgrade dbms in dev". Merged
- [tdp-collection#922](https://github.com/TOSIT-IO/tdp-collection/pull/922): status of "fix(spark3): variabilize spark version for yarn shuffle". Merged.
- [tdp-website#143](https://github.com/TOSIT-IO/tdp-website/pull/143): status of "feat(reports): contributors report of 28th of march". Merged.


## Open Topics

### Phoenix-queryserver

Phoenix-queryserver is not working in the environment of TDP2. Some commits have been made on the master branch, but the changes have not been released. So we can build our own release since components versions are compatible with the changes on the master branch.

### Spark

Discussions around the table creation from Spark. Table will be created as Iceberg tables by default. It must be specified if you want to create any other specific table format.

### Iceberg

Discussions around automatic compaction. No table properties will be preconfigured for Iceberg.
