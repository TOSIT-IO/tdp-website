---
type: contributors
description: |
  Ranger-KMS might be excluded for the TDP stack 3.3.
---

# Notes from December 20th, 2024

Ranger-KMS might be excluded for the TDP stack 3.3.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-dev#4](https://github.com/TOSIT-IO/tdp-dev/pull/4): status of "feat: added firefox container". Still some work to do to parse the IPs of the running VMs and inject it into `/etc/hosts` of the container.
- [tdp-collection#899](https://github.com/TOSIT-IO/tdp-collection/pull/899): status of "Add arbitrary OPTS to env.sh". Corrections that have been discussed last week have been done. PR merged.
- [tdp-website#123](https://github.com/TOSIT-IO/tdp-website/pull/123): status of "feat(reports): report of the 13th of December 2024". PR merged.
- [tdp-collection-extras#212](https://github.com/TOSIT-IO/tdp-collection-extras/pull/212): status of "211 'virtualenv': command not found on most recent RHEL". Change the `virtualenv_python` definition in the playbook rather than add a `virtualenv_command` command. Modifications to be made before merging.
- [tdp-observability#127](https://github.com/TOSIT-IO/tdp-observability/pull/127): status of "feat: add grafana to firewall". PR merged.
- [tdp-observability#128](https://github.com/TOSIT-IO/tdp-observability/pull/128): status of "ci: bump ansible version". Rather correct the `setup.sh` script than change the Ansible-Core version in the requirements file. Still to be reviewed and potential modifications may be needed.

## Open topics

For the TDP stack 3.3, we might exclude Ranger-KMS since it does not seem relevant and it is complicated to include.
