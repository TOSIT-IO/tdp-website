---
type: contributors
description: |
  Iceberg on TDP stack 3.3.
---

# Notes from August 9th, 2024

Iceberg on TDP stack 3.3.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#107](https://github.com/TOSIT-IO/tdp-website/pull/107): status of "feat(reports): contributors' report 240802". PR merged.
- [tdp-collection-preriquisites#103](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/103): status of "feat: include JDBC connector installation". PR merged.
- [tdp-collection#865](https://github.com/TOSIT-IO/tdp-collection/pull/865): status of "feat(hive): activate cookie based authentication mechanism". Now that commit `HIVE-22841: ThriftHttpServlet#getClientNameFromCookie should handle CookieSigner IllegalArgumentException on invalid cookie signature (Kevin Risden via Zoltan Haindrich)` has been added in Hive, the variable `hive.server2.thrift.http.cookie.auth.enabled` can be set to true. PR merged.
- [tdp-collection-extras#188](https://github.com/TOSIT-IO/tdp-collection-extras/pull/188): status of "Livy spnego and update version". PR uses new kerberos_spnego component from tdp-collection and updates livy version to use release version. PR merged.
- [tdp-collection-preriquisites#105](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/105): status of "feat: add restart playbooks for openldap/kerberos/postgres servers". PR merged.
- [tdp-collection#866](https://github.com/TOSIT-IO/tdp-collection/pull/866): status of "feat(zookeeper): update Zookeeper from 3.4.6 to 3.4.14".PR merged.
- [tdp-collection-preriquisites#106](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/106): status of "feat(jupyter): update jupyter group following refactor in tdp-collection-extra". Changed group `jupyterhub_server` to `jupyter_hub`. PR merged.
- [tdp-collection#867](https://github.com/TOSIT-IO/tdp-collection/pull/867): status of "feat(meta): update meta playbooks after adding kerberos_spnego component". PR merged.
- [tdp-collection#868](https://github.com/TOSIT-IO/tdp-collection/pull/868): status of "feat(hive): add hiveservers2's namespace in zookeeper". Adds a parent node in zookeeper for hiveserver2 when using dynamic discovery mode. PR has a conflict and will be merged after resolving it.
- [tdp-collection-extras#191](https://github.com/TOSIT-IO/tdp-collection-extras/pull/191): status of "feat(jupyter): add "jupyter_lab" ansible group". PR merged.
- [tdp-collection-extras#192](https://github.com/TOSIT-IO/tdp-collection-extras/pull/192): status of "feat(hue): disable backtrace for server error". PR merged.
- [tdp-collection-extras#193](https://github.com/TOSIT-IO/tdp-collection-extras/pull/193): status of "feat(meta): update meta playbooks after jupyter refactor". PR merged.
- [tdp-collection-extras#189](https://github.com/TOSIT-IO/tdp-collection-extras/pull/189): status of "Fix meta playbooks". Fixed with PR #193. PR closed.


## Open topics

Iceberg integration

The easiest way of integrating Iceberg in TDP is to use Hive 4. Therefore, Hadoop 3.3.6 and Tez 0.10.3 are required. Zookeeper version has been changed to 3.8 for Hadoop. Hive 4 is being tested at the moment with Ranger 2.5. With all these components, Iceberg has been deployed in a cluster where it is currently being tested. The following operations have been successfully performed: created a table in Iceberg format, renamed the table, renamed a column, added a line and more. All the metadata of the tables and transformations is available. However some operations in Hive do not work and are currently being investigated.
