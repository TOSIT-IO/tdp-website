---
type: contributors
description: |
  Hue stores folders containing temporary scripts in the /tmp folder and causes Hue to crash.
---

# Notes from February 21st, 2025

Hue stores folders containing temporary scripts in the /tmp folder and causes Hue to crash.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#135](https://github.com/TOSIT-IO/tdp-website/pull/135): status of " feat(reports): contributors report of 14th of february #135". PR merged.

## Open topics

Hue stores folders containing temporary scripts in the /tmp folder and causes Hue to crash. Investigations are underway.

In the ansible_collection, the tdp_vars pluggin do not allows to remove an entire key value variable if the key is defined as null in the tdp_vars_overrides yml configuration files. The key, with an empty value, remains in the configuration. The solution can be: 
- To delete it from the tdp_vars_defaults yml configuration files. In this case, we will have to define it in the tdp_vars_overrides yml configuration files if we need the it.
- To refactor the source code to ensure that the key value variable is entirely remove if it is define as null in the tdp_vars_overrides yml configuration files.