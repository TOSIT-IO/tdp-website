---
type: contributors
description: |
  Done with spark dynamic allocation issues
---

# Notes from November 28th, 2025

Done with spark dynamic allocation issues

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-collection#999](https://github.com/TOSIT-IO/tdp-collection/pull/999): status of "refactor(tdp_lib_dag): make yarn_nodemanager_install dependant of spa…" PR Merged.
- [tdp-collection#998](https://github.com/TOSIT-IO/tdp-collection/pull/998): status of "Refactor/yarnshuffle" PR Closed, Done with 999.
- [tdp-lib#680](https://github.com/TOSIT-IO/tdp-lib/pull/680): status of "refactor(scripts): move the spark3 service playbook before yarn in al…" PR Closed, Done with 999.
- [tdp-collection#997](https://github.com/TOSIT-IO/tdp-collection/pull/997): status of "refactor(tdp-vars-default): proxyuser hosts instead of star" Ongoing, Done with 997.
- [tdp-dev#13](https://github.com/TOSIT-IO/tdp-dev/pull/13): status of "feat(scripts): update hue version to hue-release-4.11.0-2.0-cp38-cp38…" PR Merged.
- [tdp-website#176](https://github.com/TOSIT-IO/tdp-website/pull/176): status of "feat(pages): updated hue version for tdp stack 2" PR Merged.
- [tdp-collection#1001](https://github.com/TOSIT-IO/tdp-collection/pull/1001): status of "feat(knox): give the ability to choose which topology to integrate " PR Merged.
- [tdp-website#177](https://github.com/TOSIT-IO/tdp-website/pull/177): status of "feat(reports): contributors report of the november 21st 2025" PR Merged.
- [tdp-collection#1002](https://github.com/TOSIT-IO/tdp-collection/pull/1002): status of "refactor(kerberos): always put the realm in the definition of the pri…" Ongoing Investigation.
- [tdp-lib#681](https://github.com/TOSIT-IO/tdp-lib/pull/681): status of "feat(workflow): set poetry version to 2.2.1" PR Merged.

## Open Topics

### Tdp collection
Consider removing the reading of default tdp vars in the inventory

## Knox HA 

No progress 
Knox with 2 edges. Knox works, but there is a problem with Hue accessing httpfs and jhs. If Hue points to the HA proxy, which points to the Knox services, it works. However, if we set up an external DNS for the HA proxy and use it with Hue pointing to the two Knox servers, we need to create a principal that points to the DNS. Nevertheless, we still get 404 errors. We conclude that Kerberos does not accept an external DNS name, i.e. a name that is different from the machine name.

Possible solution: try setting rDNS to false and find out more about using dns_canonicalize_hostnames.
