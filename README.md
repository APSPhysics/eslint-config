# @apsphysics/eslint-config

**ESLint configuration for APS Physics sites.**

This project includes a sensible set of default **ESLint** rules for React/TypeScript projects with a strong emphasis on immutability and accessibility.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)
- [Contributing](#contributing)

## Features

- TypeScript
- React
- React Hooks
- React A11y
- Jest
- import statements
- Prettier integration
- Functional rules

## Installation

This package has several peer dependencies that need to be installed to work properly. You can see the full list with the following command:

```sh
npm info "@apsphysics/eslint-config" peerDependencies
```

Here is the script to add this package along with all of it's required dependencies:

```sh
yarn add -D @apsphysics/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-config-prettier eslint-config-react-app eslint-plugin-flowtype eslint-plugin-functional eslint-plugin-immutable eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard prettier typescript
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
  "extends": ["@apsphysics"]
  "rules": {
    "functional/no-mixed-type": "warn"
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.

## About

This package extends the popular [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) package, which is created and maintained the Facebook team. This configuration package is actively maintained and includes sensible rules for React-specific apps, including hooks usage. It also includes accessibility rules via [react-a11y](https://github.com/reactjs/react-a11y) as well as rules for import statements and a few other niceties.

[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app):

- Docs: https://www.npmjs.com/package/eslint-config-react-app
- Source: https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js

## Contributing

### Committing Code to GitHub

This repo uses [Husky](https://typicode.github.io/husky/#/) and [@commitlint](https://commitlint.js.org/#/) to enforce commit messages that follow the [Conventional Commit](https://www.conventionalcommits.org) specification. Please refer to the [APS Playbook](https://apsphysics.atlassian.net/wiki/spaces/SWENG/pages/993786/Playbook#Conventional-Commits) for a quick reference.

### Publishing to GitHub Packages

This package is published automatically with a GitHub Action that is triggered via GitHub releases. Release drafts are created by the [np](https://www.npmjs.com/package/np) package by running the `yarn run release` command. This will prompt you to select the appropriate version type (patch, minor, major, etc.) and will automatically create a detailed release draft containing all commit messages since the previous release. Once you save the release, the GitHub Action will automatically take care of publishing the new version of the package to the GitHub package registry.
