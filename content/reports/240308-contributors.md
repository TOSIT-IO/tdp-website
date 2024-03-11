---
type: contributors
description: |
  TDP stack 1.1 and 2.0
---

# Notes from March 9th, 2024

TDP stack 1.1 and 2.0

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#75](https://github.com/TOSIT-IO/tdp-website/pull/75): Contributors' meeting of 1st of march 2024. PR is merged.

## Open topics

TDP stack 1.1

- All functional patches have been added in the README.md documentation file of each project under `Build notes`.

- Spark: branch `branch-3.2.4-build-new` replaced branch `branch-3.2.4-build` and is now named like the latter.

- All `-tdp` branches have been rebased on their respective `-build` branch.

- Meeting Wednesday 13th of March to discuss the new naming of the branches.

- `Zookeeper 3.8` has been compiled and can replace `Zookeeper 3.4.14` for the stack 1.1.

- Once the naming of the branches has been done and TDP-lib is able to handle table migrations, the documentation must be updated and the release will be ready.

TDP stack 2.0

- Adaltas and EDF are starting working on the migration path from TDP 1.1 to TDP 2.0.

- Adaltas with EDF were able to build `Hadoop 3.3.6` with `Knox 2.0.O` and `HBase 2.4.17`.

- Work in progress to build `Hive 4.0` and `Spark 3.5`.

- `Iceberg` will be build but `Hive 4.0` is a prerequisit.

Issue with user accounts written in uppercase letters

- The issue encounterd by the EDF R&D cluster with user accounts written in uppercase letters has been solved by changing 2 variables in `TDP vars`.

JupyterHub

- DGFIP's data scientists use JupyterHub a lot and it needs to be more customized in TDP to be able to handle several Python versions for instance and other features.

HUE

- DGFIP's data scientists also use HUE a lot and the current compilation does not include the internationalisation. It needs to be compiled so that it can be used in French and English distinctly.
