---
type: contributors
description: |
  Security issues in Spark and failure to compile HBCK2 with HBase 2.6.
---

# Notes from July 4th, 2025

Security issues in Spark and failure to compile HBCK2 with HBase 2.6.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#156](https://github.com/TOSIT-IO/tdp-website/pull/156): status of "feat(reports): contributors report of the June 27th 2025". PR merged.
- [tdp-collection##955](https://github.com/TOSIT-IO/tdp-collection/pull/955): status of "refactor(zookeeper): change to logback configuration". Ongoing review.

## Open Topics

### HBase

Compilation error of HBCK2 with HBase 2.6.1. A [ticket](https://issues.apache.org/jira/browse/HBASE-28610) has been opened on Jira since May 2024, but there has not been any activity on it.

### Spark

Two security vulnerabilities have been identified in Spark: one XSS vulnerability and one RCE vulnerability. Spark will submit a pull request to address the XSS vulnerability. There has not yet been any response from Spark regarding the RCE vulnerability.
