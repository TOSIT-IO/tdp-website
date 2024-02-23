---
type: contributors
date: 2024-02-23
description: |
  Discussion about the compilation of TDP 1.1 stack.
---

# Meeting notes February 23rd, 2024

Discussion about the compilation of TDP 1.1 stack.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-observability#87](https://github.com/TOSIT-IO/tdp-observability/pull/87): Have a dashboard for python based services (Hue, JupyterHub). Does not search Hue or JupyterHub if service not present. PR is merged.
- [tdp-collection-extras#174](https://github.com/TOSIT-IO/tdp-collection-extras/pull/174): Monitor Hue & JupyterHub metrics. PR is merged.
- [tdp-website#72](https://github.com/TOSIT-IO/tdp-website/pull/72): Contributors' meeting of 16th February 2023. PR is merged.
- [tdp-website#73](https://github.com/TOSIT-IO/tdp-website/pull/73): Normalize titles and limit homepage list. Will discuss it at DGFIP next week.

## Open topics

TDP stack 1.1

- Concerning Spark, write in the README.md file the reason why we applied a self-made patch about adding the profile `hadoop-3.1`. Write a list with the self-made patches of the other components to see if we apply the same method to their README.md file.

- Ranger: the compilation for the stack has been done with the branch `ranger-2.0-TDP`, now test if it works with the branch `ranger-2.0.0-TDP`.

- Hive: Must still rebase `branch-2.3.9-TDP` on `branch-2.3.9-build`.

- See if we can have a script which checks if all branches ending with `-TDP` are rebased on the `-build` branch.
