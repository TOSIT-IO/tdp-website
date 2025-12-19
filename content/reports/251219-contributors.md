---
type: contributors
description: |
  Wait for PR validation on proxy users before tagging version 2.0.
---

# Notes from December 19th, 2025

Wait for PR validation on proxy users before tagging version 2.0.

## Pull Requests

Weekly review of open PRs (in chronological order):
- [tdp-getting-started#315](https://github.com/TOSIT-IO/tdp-getting-started/pull/315): status of "fix(scripts): command option from the lib changed" Waiting author for review.
- [tdp-collection#1009](https://github.com/TOSIT-IO/tdp-collection/pull/1009): status of "tdp_vars plugin stop considering default vars" PR Merged.
- [tdp-website#181](https://github.com/TOSIT-IO/tdp-website/pull/181): status of "Update ansible.cfg sample configuration" Need a quick fix to be merged.
- [tdp-collection#1011](https://github.com/TOSIT-IO/tdp-collection/pull/1011): status of "feat(topology): add knox to the kerberos_spnego since knox needs the …" PR Merged.
- [tdp-website#182](https://github.com/TOSIT-IO/tdp-website/pull/182): status of "feat(reports): contributors report of the december 12th 2025" Need a quick fix to be merged.
- [tdp-collection-extras#246](https://github.com/TOSIT-IO/tdp-collection-extras/pull/246): status of "fix(hue): add run_once for the database initialisation in hue_server_…" PR Merged.

## Open Topics

### Documentation

Review the documentation and update it with the new commands.

### Ansible and Python version    

Try upgrading Python to version 3.12 with Ansible-core 2.16. 
The Python version was chosen because it exists on Rocky 8. Ansible-core version 2.16 is compatible with Python 3.12 and provides native support for Rocky 8. Based on this reasoning, Python 3.12 and Ansible-core 2.16 were chosen for the upgrade. The initial tests are fairly conclusive and most of tdp-lib works, but a few fixes are needed for optimal integration of these new versions into TDP.
