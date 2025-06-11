---
type: contributors
description: |
  Abandon building TDP2 with a stack based on Hadoop 3.4 and discussions around the tdp cli commands
---

# Notes from June 6th, 2025

Abandon of building TDP2 with a stack based on Hadoop 3.4. TDP2 will use Hadoop 3.3.6 instead.
Discussions around the TDP CLI commands.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#151](https://github.com/TOSIT-IO/tdp-website/pull/150): status of “feat(reports): contributors report of the May 23rd 2025”. PR merged.
- [tdp-lib#647](https://github.com/TOSIT-IO/tdp-lib/pull/647): status of "Add the tdp vars import command". Ongoing investigations.
- [tdp-collection#950](https://github.com/TOSIT-IO/tdp-collection/pull/950): status of "feat(zookeeper): allow specific 4lw commands via whitelist". PR merged.

## Open Topics

## TDP 2

Using Hadoop 3.4.2 for TDP2 has been abandoned, as it was too complex to adapt in the TDP context and too costly in terms of time, without any results.
TDP2 will use Hadoop 3.3.6 instead, along with Hive 4.0.0 including backported commits.

## tdp-lib

A discussion about the TDP CLI commands led to the following changes:

- Rename the `tdp vars import` command to `tdp vars update`
- Integrate the behavior of the `--erase` option by default, and remove it from the options list
- ```default_vars``` should be taken into account by default
- Remove the `tdp vars edit` command
- Refactor the `tdp init` command: 
  - Change the `--overrides` option with `--conf`
  - Allow the `--conf` option to be specified multiple times (```multiple = true```)
  - The ```conf``` must be in the current directory; display a warning if it does not exist or does not contain any ```.yml``` file.
  - If the `--conf` option points to a Git repository: check the SHA and display a warning if the repository is in a dirty state
  - If ```tdp_vars_default``` is from Galaxy: use the version
- For the `tdp vars init` command : create 1 commit per ```tdp_vars_default``` and ```--conf```
- For the `tdp vars update` command: create only 1 commit for all changes
- List all the existing variables in the ```.env``` file
- Hide the ```tdp_vars``` folder by calling it ```.__tdp_vars```
- update the ```tdp-vars``` plugin to remove the default variable merging behavior