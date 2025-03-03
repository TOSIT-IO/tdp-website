---
type: contributors
description: |
  Development of a test tools for tdp preriquisites
---

# Notes from February 28th, 2025

Development of a tool to test all the prerequisites for TDP deployment. The aim is to check the tdp_preriquisites parameters and some local parameters required for TPD installation. 

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#136](https://github.com/TOSIT-IO/tdp-website/pull/136): status of " feat(reports): contributors report of 21st of february 2025 #136". PR merged.

## Open Topics
Hue still under investigation. There's a TODO in the Apache Hue code to customize the path to this directory. The feature is not yet developed. This could be a way of solving the problem.

New version of jupyterlab do not work with python 3.6. The TDP 2 version of Jupyterlab will probably be similar to the TDP 1 version.

Problem solving in progress with Livy and the switch to spark 3.5.2

Investigations into the tdp_vars plugin (especially the tdp init merge method) have been completed. Finally, TDP init will not evolve to customize the merge method for variables.
