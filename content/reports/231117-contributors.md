---
type: contributors
date: 2023-11-17
description: |
  Weekly meeting of the TDP contributors to discuss opens PR and particularly the ones related to the TDP 1.1 release.
---

# TDP contributors meeting notes

Weekly meeting of the TDP contributors to discuss opens PR and particularly the ones related to the TDP 1.1 release.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [hadoop#5](https://github.com/TOSIT-IO/hadoop/pull/5): Waiting for contributor answer.
- [tdp-collection#799](https://github.com/TOSIT-IO/tdp-collection/pull/799): Patch for hive transactions and compactions on posgresql backend is still a WIP. Not all oprerations are functionnal.  
  The patch will not garanty stable behaviour, as many known issues are only corrected in Hive 4. **This feature will be best effort only**. As discused, we will focus to bring transactions and compactions with Hive 4 in a future release.

- [tdp-collection#816](https://github.com/TOSIT-IO/tdp-collection/pull/816): Merged.
- [tdp-website#61](https://github.com/TOSIT-IO/tdp-website/pull/61): Merged.
- [tdp-observability#59](https://github.com/TOSIT-IO/tdp-observability/pull/59): Promtail section should be checked. Spark is missing.
- [tdp-collection#819](https://github.com/TOSIT-IO/tdp-collection/pull/819): Can be merged after resolving conflicts.
- [tdp-collection-prerequisites#97](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/97): To be reviewed by @PACordonnier.
- [tdp-getting-started#296](https://github.com/TOSIT-IO/tdp-getting-started/pull/296): To be reviewed by @PACordonnier.
- [tdp-getting-started#297](https://github.com/TOSIT-IO/tdp-getting-started/pull/297): Merged.
- [tdp-getting-started#298](https://github.com/TOSIT-IO/tdp-getting-started/pull/298): Merged.
- [tdp-collection-prerequisites#99](https://github.com/TOSIT-IO/tdp-collection-prerequisites/pull/99): Goes along with [tdp-observability#60](https://github.com/TOSIT-IO/tdp-observability/pull/60), to be reviewed.
- [tdp-observability#60](https://github.com/TOSIT-IO/tdp-observability/pull/60): To be reviewed by @rpignolet.
- [tdp-getting-started#300](https://github.com/TOSIT-IO/tdp-getting-started/pull/300): Merged. It is ok to fix the Python version for master. New branches should specify the minimal Python version and mention what versions has been tested.
- [tdp-observability#61](https://github.com/TOSIT-IO/tdp-observability/pull/61): PR is still as draft, it can be merged once marked as ready.

### TDP 1.1 release related PR

- [TDP#90](https://github.com/TOSIT-IO/TDP/pull/90): For now, build have been tested for :

  - Hadoop 3.1.4
  - Tez 0.9.1
  - Hive 1.2.3
  - Spark 2.3.5
  - Hive 2.3.9

  Some issues remain for:

  - Spark 3.2.4 see [spark#3](https://github.com/TOSIT-IO/spark/pull/3)
  - HBase Connectors, which can't be build because it needs Spark 3 jars
  - HBase 2.1.10 is not compatible with Hadoop 3.1.4 because of a dependency upgrade (jetty) that is not backported on 2.1.10 (EOL and shaded in later versions). @Pierrotws is working on a PR to upgrade jetty on HBase 2.1.10.

- [spark#3](https://github.com/TOSIT-IO/spark/pull/3): Issue with `mvn install` (see [spark-old#3](https://github.com/TOSIT-IO/spark-old/issues/3)). We need to try to buid Spark 3.2.4 with and without this PR to see if it improve the test output. Spark 2 is ok.
- [ranger#4](https://github.com/TOSIT-IO/ranger/pull/4): HBase plugin performance improvements that has not been released by Ranger but could be used. Merged.
- [phoenix#5](https://github.com/TOSIT-IO/phoenix/pull/5): Merged. Build can be tested now.
- [phoenix-queryserver#5](https://github.com/TOSIT-IO/phoenix-queryserver/pull/5) Merged. Build can be tested now.
- [knox#3](https://github.com/TOSIT-IO/knox/pull/3): Merged. Build can be tested now.
- [hbase-connectors#3](https://github.com/TOSIT-IO/hbase-connectors/pull/3): Merged. Build can be tested now.
- [hbase-operator-tools#3](https://github.com/TOSIT-IO/hbase-operator-tools/pull/3): Merged. Build can be tested now.

## Open topics

- @sergkudinov, related to this [discussion](https://github.com/orgs/TOSIT-IO/discussions/92): PR can be opened to reflect the suggested updates. `tdp-cheatsheet` repository visibility has be set to private.
- @PaulFarault, about the future of the `tdp-getting-started` repository: `tdp-getting-started` will be archived along with `tdp-vagrant`. Content of `tdp-getting-started` `dev` branch and `tdp-vagrant` will be imported to `tdp-dev`. `tdp-dev` will still contain Git submodules and the `setup.sh` script will be splitted in several utility scripts.
- @PaulFarault, about repository names: Discussion about how to name the collections repository should be updated in order to take a decision.
- @PACordonnier: JMX exported metrics names are not user friendly. It would be nice to have a way to rewrite them using a pattern. See [this article](https://godatadriven.com/blog/monitoring-hbase-with-prometheus/). A PR should be opened to discuss this topic.
