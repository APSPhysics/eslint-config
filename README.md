# @apsphysics/eslint-config

A sensible set of ESLint rules for React/TypeScript projects with an emphasis on immutability and accessibility.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)
- [Contributing](#contributing)

## Features

- Editor and Prettier Integrations
- Rules for
  - TypeScript
  - React and React Hooks
  - A11y with React
  - Testing with Jest
  - Import Statements
  - Functional and Immutable Patterns

## Installation

```sh
yarn add -D @apsphysics/eslint-config eslint prettier typescript
```

## Usage

Once the library and all required dependencies are installed, you can use it by specifying this library in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` or `.eslintrc.js` file.

```json
{
  "extends": ["@apsphysics"]
}
```

### Overwriting Rules

Any rule that is included with this library can be easily overwritten using the `rules` property in your `.eslintrc` or `.eslintrc.js` file:

```json
{
  "extends": ["@apsphysics"],
  "rules": {
    "functional/no-mixed-type": "warn"
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.

## About

This package extends the popular [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) package. It also includes accessibility rules via [react-a11y](https://github.com/reactjs/react-a11y) as well as rules for import statements and a few other niceties.

[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app):

- Docs: https://www.npmjs.com/package/eslint-config-react-app
- Source: https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js

## Contributing

### Committing Code to GitHub

This repo uses [Husky](https://typicode.github.io/husky/#/) and [@commitlint](https://commitlint.js.org/#/) to enforce commit messages that follow the [Conventional Commit](https://www.conventionalcommits.org) specification. Please refer to the [APS Playbook](https://apsphysics.atlassian.net/wiki/spaces/SWENG/pages/993786/Playbook#Conventional-Commits) for a quick reference.

### Publishing to GitHub Packages

This package is published automatically with a GitHub Action that is triggered via GitHub releases. Release drafts are created by the [np](https://www.npmjs.com/package/np) package by running the `yarn run release` command. This will prompt you to select the appropriate version type (patch, minor, major, etc.) and will automatically create a detailed release draft containing all commit messages since the previous release. Once you save the release, the GitHub Action will automatically take care of publishing the new version of the package to the GitHub package registry.
