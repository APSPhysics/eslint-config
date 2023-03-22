# Change Log

# 1.2.0

- Moved to scoped package name
- Added sort import rules
- Updated dependencies

# 1.1.1

- Updated internals for `no-public-secrets` plugin to address plugin usage issue
- Updated dependencies and failing tests
- Updated .npmignore to exclude tests and internal demo

# 1.1.0

- New `no-public-secrets` rule to prevent secrets from being committed to source control
- New `ban-ts-comments` rule to prevent `@ts-ignore` and `@ts-nocheck` comments from being committed to source control
- New Jest test for `no-public-secrets` rule
- Updated dependencies
- Updated README documentation
- Updated Demo app
- Updated lock file

# 1.0.0

- Moved to public Github package

# 0.0.29

- Added rulesets for Jest, immutable data, and console statements
- Updated and pruned dependencies
- Updated demo to use React 18

# 0.0.28

- Improved Prettier integrationn
- Updated dependencies

# 0.0.25

- Move back to using `eslint-config-react-app` as base now that ESLint 8 is officially supported.
- Clean up rules and file structure

# 0.0.24

- Fix lock file issue causing publish failure

# 0.0.23

- Refactors to rules to address import bug

# 0.0.22

- Fix peer dep for ESLint 8

# 0.0.21

- Replaced `eslint-config-react-app` with custom rules solutions
- Added and extended from `eslint-config-airbnb`
- Updated usage documentation

# 0.0.20

- Added missing peer dep for ESLint 8

## 0.0.19

- Updated dependencies to support ESLint 8

## 0.0.17 & 0.0.18

- Resolve dependency issues

## 0.0.16

- Updated dependencies
- Removed sort imports rule

## 0.0.15

- Updated dependencies
- Added sort imports rule
- Moved most peer dependencies to library dependencies (excluding TypeScript, ESLint, and Prettier)
- Added rules for console statements
- Updates to internal demo app (for testing rules)

## 0.0.14

- Build configuration updates
- No lib changes

## 0.0.13

- Added sort-imports rule
- Updated commitlint configuration

## 0.1.0

- Update peer deps to latest major versions (eslint 7)
- Update dev deps to match peer deps semver.
- Removed `eslint-plugin-standard` since it is now deprecated, latest version of
  `eslint-config-standard` which is included by `eslint-config-react-app` covers
  everything it had.

## 09-20-2019

- Initial commit