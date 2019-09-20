# eslint-config-tesseract

[![version](https://img.shields.io/npm/v/@tesseract/eslint-config.svg?style=flat-square)](http://npm.im/@tesseract/eslint-config)
[![MIT License](https://img.shields.io/npm/l/@tesseract/eslint-config.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

### ESLint configurations for immutable React/TypeScript projects.

This project includes a combination of **ESLint** and **TSLint** rules for React and TypeScript code. Many of the rules favor a functional style with a strong emphasis on immutability and strong type definitions.

## Features

- TypeScript (ESLint + TSLint)
- React
- React Hooks
- React A11y
- Jest
- import statements
- Prettier integration
- Emphasis on immutability

## Install library and required dependencies

### Option 1

If you are using **npm 5+** or **yarn**, then you can install this library and all of the required dependencies in a one-liner with **install-peerdeps** :

```sh
npx install-peerdeps --dev @tesseract/eslint-config
```

**install-peerdeps** will automatically detect whether you're using Yarn. If you are, it'll prompt you as to whether you want to use Yarn or npm to install the packages.

### Option 2

You can install this package and the peer dependencies using `yarn add` or `npm install`.

```sh
npm install -D @tesseract/eslint-config
```

-or-

```sh
yarn add -D @tesseract/eslint-config
```

To see a list of required dependencies, run the following command:

```sh
npm info "@tesseract/eslint-config" peerDependencies
```

## Configure

This library is published with the [GitHub Package Registry](https://github.com/features/package-registry), which requires a little extra configuration. The most simple approach is to create a `.npmrc` file in the root of your project and add the following line:

`registry=https://npm.pkg.github.com/@tesseract`

Please refer to the [Configuring npm for use with GitHub Package Registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package) article from GitHub for more information and alternative configuration options.

## Usage

This library ships with two configurations:

- TypeScript + React
- TypeScript only

Once the library and all required dependencies are installed, you can use it by specifying this library in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` or `.eslintrc.js` file.

For TypeScript + React:

```json
{
  "extends": ["@tesseract"],
  "rules": {}
}
```

For TypeScript only:

```json
{
  "extends": "@tesseract/typescript",
  "rules": {}
}
```

## Overwriting Rules

Any rule that is included with this library can be easily overwritten using the `rules` property in your `.eslintrc` or `.eslintrc.js` file:

```json
{
  "extends": ["@tesseract/eslint"],
  "rules": {
    "immutable/no-this": 0
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.
