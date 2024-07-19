---
type: contributors
description: |
  Inclusion of automatic TDP integration tests.
---

# Notes from July 19th, 2024

Inclusion of automatic TDP integration tests.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [TDP#98](https://github.com/TOSIT-IO/TDP/pull/98): status of "fix(build-env): use hyphen instead of underscore for image name". PR merged.
- [tdp-collection#852](https://github.com/TOSIT-IO/tdp-collection/pull/852): status of "Refactor kerberos spnego": added a group Spenego with all services which uses Spenego.However there is still work to do on this PR.
- [tdp-website#104](https://github.com/TOSIT-IO/tdp-website/pull/104): status of "feat(reports): 120724 contributors report". PR merged.
- [tdp-observability#107](https://github.com/TOSIT-IO/tdp-observability/pull/107): status of "feat(grafana): default bind to 0.0.0.0". Added the bind address since only one IP was available. PR merged.
- [sparkmagic#1](https://github.com/TOSIT-IO/sparkmagic/pull/1): status of "Add README". PR merged.

## Open topics

Still issues with Livy 0.8.0 not only with Spark 3.5 but also with Spark 3.2 so there is no link between the issue and the Spark version. Having issues building Livy with profile scala 2.12. Therefore we change the default value of scala from 2.11 to 2.12 instead of using the profile.

Doing a new release of Spark 3.2.4 to include Spark R.

Will start working on automatic integration tests of TDP. Node decommissioning should be one of them. Still have to decide on the test framework.

Phoenix Omid is included in the Phoenix project and requires Hadoop HDFS 3.0.0 for the build which is problematic. Therefore a phoenix-omid repository has been added which has the hadoop version aligned on the rest of the stack.
