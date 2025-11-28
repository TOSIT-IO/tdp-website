---
type: contributors
description: |
  The next release of Spark 3.5 will include the Spark History XSS vulnerability fix.
---

# Notes from November 21st, 2025

Spark version 3.5.8 will include a fix for the previously identified Spark History XSS vulnerability.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#992](https://github.com/TOSIT-IO/tdp-collection/pull/992): status of " feat(knox): set authorization setting in topology modified by knox_ra…" Investigation Ongoing.
- [tdp-lib#680](https://github.com/TOSIT-IO/tdp-lib/pull/680): status of " feat(knox): set authorization setting in topology modified by knox_ra…" Investigation Ongoing.
- [tdp-collection#994](https://github.com/TOSIT-IO/tdp-collection/pull/994): status of "refactor(spnego): only add principal to keytab if it does not exist" Investigation Ongoing.
- [tdp-collection#997](https://github.com/TOSIT-IO/tdp-collection/pull/997): status of "refactor(tdp-vars-default): proxyuser hosts instead of star" Investigation Ongoing .
- [tdp-collection#1000](https://github.com/TOSIT-IO/tdp-collection/pull/1000): status of "refactor(tdp_vars_default): replace httpfs proxyusers by hosts instead of star" Unmerged .
- [tdp-collection-extras#241](https://github.com/TOSIT-IO/tdp-collection-extras/pull/241): status of "refactor(tdp-vars-default): proxyuser hosts instead of star" Investigation Ongoing .
- [tdp-collection#999](https://github.com/TOSIT-IO/tdp-collection/pull/999): status of "refactor(tdp_lib_dag): make yarn_nodemanager_install dependant of spa…" Investigation Ongoing .
- [tdp-website#175](https://github.com/TOSIT-IO/tdp-website/pull/175): status of "feat(reports): contributors reports of the November 14th 2025" PR Merged .
- [tdp-observability#149](https://github.com/TOSIT-IO/tdp-observability/pull/149): status of "style: fix alloy config indentation" PR Merged .
- [tdp-observability#150](https://github.com/TOSIT-IO/tdp-observability/pull/150): status of "fix(alloy): fix "observability" alloy pipeline" PR Merged .

## Open Topics

### Spengo node addition
This passage concerns the following PR : [tdp-collection#994](https://github.com/TOSIT-IO/tdp-collection/pull/994)
When adding a keytab, we check the condition headless.keytabs = 0 to create the keytab only if the keytabs are empty. Here, we remove this condition, which means that with the current code, we will have duplicates in the keytabs. So the modification checks whether the principals exist in the keytab or not. And only if the principal is not found inside or if the keytabs do not exist, then we only create the keytabs at that moment. This command does not delete the principal when a node is deleted from the inventory.

### Spark History XSS vulnerability  

PR on Spark accepted in the Spark 3.5 branch
The next release of Spark 3.5 (3.5.8) will include the requested fix.
