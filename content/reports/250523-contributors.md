---
type: contributors
description: |
  Building TDP2 with a stack based on Hadoop 3.4
---

# Notes from May 23th, 2025

Testing of a stack based on hadoop 3.4 is still in progress. 

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#150](https://github.com/TOSIT-IO/tdp-website/pull/150): status of “feat(reports): contributors report of the May 16th 2025”. PR merged.

## Open Topics

## TDP 2

Integration of Spark4 on a test version of TDP 2.

## Iceberg - Hive

Some issues related to Iceberg are patched on Hive 4.0.1, the upgrade to this version of Hive is under discussion otherwise some of these commits will have to be applied to version 4.0.0 of Hive. 

## Hive Metastore - Spark 3.5

Hive Metastore (HMS) 4 does not work with spark3.5 for Hive version 4.0.1. It will be necessary to backport commits in order to maintain operation between HMS and spark3.5.

## Deployment

New Ansible configuration to accelerate TDP deployment has been found. This configuration will be pushed on tdp-dev.

Change of Ranger and Phoenix-hbase version management. Automatic version control of the various files that depend on Hbase and Ranger.  These changes will be implemented in TDP2.

## Other 

Problem creating dataframe in using livy with jupyter and sparkmagic is under investigation. 

Investigation into a possible upgrade of Python between TDP1 and TDP2.

