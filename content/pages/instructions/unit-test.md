
# Unit testing

Tests are written using the Node.js native Test Runner package](https://nodejs.org/api/test.html).

Execute all tests from the project's directory:

```bash
node --test \
  `# Use a specific reporter, optional` \
  --test-reporter spec
```

Selective usage:

```bash
node --test \
  `# Use a specific reporter, optional` \
  --test-reporter spec \
  src/test/source.js
```

Advanced usage with multiple reporter and destinations:

```bash
node --test \
  `# Use a specific reporter, optional` \
  --test-reporter spec \
  --test-reporter dat \
  `# Destination for the corresponding test reporter` \
  --test-reporter-destination=stdout \
  --test-reporter-destination=file.txt
```
