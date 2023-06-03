module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["articles", "layout", "pages", "project"]],
    "scope-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "refactor",
        "revert",
        "test",
      ],
    ],
  },
};
