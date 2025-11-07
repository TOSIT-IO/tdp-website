---
type: contributors
description: |
  Problem configuring Knox with SPnego.
---

# Notes from October 31st, 2025

Problem configuring Knox with SPnego.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#172](https://github.com/TOSIT-IO/tdp-website/pull/172): status of "251024 contributors report" PR Merged.
- [SPARK#7](https://github.com/TOSIT-IO/spark/pull/7): status of "Spark UI fixes for WebUI-Executors - "Request is a replay (34) attack" PR Merged.
- [tdp-collection#991](https://github.com/TOSIT-IO/tdp-collection/pull/991): status of "feat(knox): added tdpspnego gateway" Ongoing Investigations.

## Open Topics

### Knox - Hue
Problem configuring Knox for use in full HA.
We need to add a typology in Knox to be able to use it with SPnego.
Currently, this operation requires creating a ticket and performing a curl negotiate on the various services. 
However, in this case, impersonation is customised and not variabilised.
This impersonation works with webhdfs but does not work with jhs. Upon investigation, we found that Hue offers a doAs function for jhs that does not work because of impersonation. Changing the spelling to doas, as is the case for webhdfs, should make it work.
