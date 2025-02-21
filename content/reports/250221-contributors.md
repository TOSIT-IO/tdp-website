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

In the ansible_collection, the tdp_vars plugin does not allow to remove a variable since it will always read what is defined in the tdp_vars_default. If the variable (not the string, the YAML *null* value), the key will still exists and will most likely be rendered by jinja.

Ways to work around for now: 

- Delete key from the tdp_vars_defaults yml configuration files. In this case, the user will have to define it in the tdp_vars (or overrides) configuration files if needed. Since this requires a tdp_collection modification it is definetely not user friendly
- Rewrite the jinja templates to not render a key when the value is *null*. Same issue with patching the collection though.

A more appropriate fix could be by leveraging the tdp_vars plugin. By managing *null* value in the tdp_vars and delete the key if defined to null. This might create issue when user requires a value to be *null* (through its own tdp_vars), but after years of working with TDP we dont see that as a use case. Also tdp_vars plugin could accept settings, whether through environment variables or ansible.cfg settings. These settings could affect this behaviour