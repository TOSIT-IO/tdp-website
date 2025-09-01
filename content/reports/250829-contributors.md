---
type: contributors
description: |
  Release of a TDP version aligned with master to fix DataFrame creation issue on Jupyter
---

# Notes from August 22nd, 2025

Release of a TDP version aligned with master to fix DataFrame creation issue on Jupyter.

## Pull Requests

Weekly review of open PRs (in chronological order):

- [tdp-website#162](https://github.com/TOSIT-IO/tdp-website/pull/162): status of "feat(reports): contributors report of the August 22nd 2025". PR merged.

## Open Topics

### Livy

When working in Jupyter and attempting to create a DataFrame using `spark.createDataFrame()`,  
the following error occurred:

```
JavaPackage object is not callable
```

This problem has been addressed in **Livy 0.9.0**  
(see [LIVY-1010](https://issues.apache.org/jira/browse/LIVY-1010)).

**Decision:** Release a TDP Livy version aligned with master.
