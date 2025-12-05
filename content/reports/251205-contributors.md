---
type: contributors
description: |
  tdp-lib issues related to deployment and Python version
---

# Notes from December 5th, 2025

tdp-lib issues related to deployment and Python version

## Pull Requests

Weekly review of open PRs (in chronological order):


- [tdp-collection#994](https://github.com/TOSIT-IO/tdp-collection/pull/994): status of "refactor(spnego): only add principal to keytab if it does not exist" PR Merged.
- [tdp-collection#1002](https://github.com/TOSIT-IO/tdp-collection/pull/1002): status of "refactor(kerberos): always put the realm in the definition of the principal" PR Merged.
- [tdp-collection#1003](https://github.com/TOSIT-IO/tdp-collection/pull/1003): status of "feat(knox): add knox_ha_address for kerberos principal authentication in tdpspnego topology" PR Merged.
- [tdp-collection#1004](https://github.com/TOSIT-IO/tdp-collection/pull/1004): status of "fix(zookeeper): the headless keytab should be created with the headless keytab task" PR Merged.
- [tdp-collection#1006](https://github.com/TOSIT-IO/tdp-collection/pull/1006): status of "refactor(tdp_vars_default): move knox livyserver3 to tdp_extra" PR Merged.
- [tdp-collection-extras#242](https://github.com/TOSIT-IO/tdp-collection-extras/pull/242): status of "feat(hue): added knox_ha_address for mapreduce jhs and httpfs" PR Merged.
- [tdp-collection-extras#243](https://github.com/TOSIT-IO/tdp-collection-extras/pull/243): status of "refactor(kerberos): always put the realm in the definition of the principal" PR Merged.
- [tdp-collection-extras#244](https://github.com/TOSIT-IO/tdp-collection-extras/pull/244): status of "refactor(topology): set edge1 node for livy-server as it cannot be in HA" PR Merged.
- [tdp-collection-extras#245](https://github.com/TOSIT-IO/tdp-collection-extras/pull/245): status of "refactor(tdp_vars_default): move knox livyserver3 to tdp_extra" PR Merged.
- [tdp-dev#13](https://github.com/TOSIT-IO/tdp-dev/pull/13): status of "feat(scripts): update hue version to hue-release-4.11.0-2.0-cp38-cp38…" PR Merged.
- [tdp-website#178](https://github.com/TOSIT-IO/tdp-website/pull/178): status of "feat(pages): added jmx in components" PR Merged.
- [tdp-website#179](https://github.com/TOSIT-IO/tdp-website/pull/179): status of "feat(report): contributors report of the november 28th 2025" PR Merged.
- [tdp-vagrant#29](https://github.com/TOSIT-IO/tdp-vagrant/pull/29): status of "feat(hosts): add edge1 group to hosts" PR Merged.

## Open Topics

### Fixed issues

- [tdp-collection#968](https://github.com/TOSIT-IO/tdp-collection/issues/968): status of "Kerberos SPNEGO upgrade issue - Module limitation during cluster upgrades" PR Merged.
- [tdp-collection#995](https://github.com/TOSIT-IO/tdp-collection/issues/995): status of "Add new principal for spnego" Issue closed.

### tdp-collection

Consider removing the reading of default tdp vars in the inventory

### tdp-lib

[tdp-lib#690](https://github.com/TOSIT-IO/tdp-lib/issues/690): if a deployment is killed for any reason, the status remains "running". It involves a diff between the status that the database contains, and the real status. To fix this, once the deployment fails for any reason, it should ask if the actual state has to be cleaned up or not. Once done, you could choose between `tdp plan dag` or `tdp resume`

[tdp-lib#689](https://github.com/TOSIT-IO/tdp-lib/issues/689): the lib is not working with Python 3.9.7. It seems to be due to some specific errors to this version, not encountered on lower or upper versions. It has been mentioned to possibly switch to Python 3.12. Also, it has been discussed to upgrade the ansible-core version to 2.15.13 or 2.16
