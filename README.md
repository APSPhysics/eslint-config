# @apsphysics/eslint-config

ESLint configuration for APS Physics projects

## Features

Rules for

- TypeScript
- React and React Hooks
- A11y with React
- Testing with Jest
- Import statements
- Functional patterns
- Prettier/ESLint integration
- Environment variables

## Setup (required for installation)

This package is published as a public package on Github. To install it, you must first set up your project to use Github packages, which requires a Github personal access token.

The easiest way to get started is as follows:

1. Create a Github personal access token with the `read:packages` scope and export it as a variable in your local `.bashrc` or `.zshrc` file. For example, `export GITHUB_AUTH_TOKEN=your_token_here`.
2. Create a `.npmrc` file in your project and add the following:

```
//npm.pkg.github.com/:_authToken=${GITHUB_AUTH_TOKEN}
registry=https://registry.npmjs.org
@apsphysics:registry=https://npm.pkg.github.com/
```

See [this guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) for more information and additional options.

## Installation

```sh
yarn add -D @apsphysics/eslint-config eslint prettier typescript
```

or

```sh
npm install --save-dev @apsphysics/eslint-config eslint prettier typescript
```

## Usage

Once the library and all required dependencies are installed, you can use the package by simply specifying this library in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` or `.eslintrc.js` file.

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

Here are some details about a few of our specific rules:

### `ban-ts-comment` rule

`@ts-ignore` allow errors to sneak into our code that could otherwise have been caught be TypeScript. It can be helpful during dev just to get things working, but it should never enter production code.

However, ignoring errors can be useful in rare cases. Some examples include:

- Third party libraries with incorrect types, but valid code
- Testing that incorrect arguments to a function are handled correctly or throw an Error

In these cases, we should use `@ts-expect-error`. The primary difference is that `@ts-ignore` will always ignore the error, but `@ts-expect-error` will notify developers if the underlying error has been resolved, e.g. if the external library updates its types. In this case, the code will still display a TS error, but this one indicating that the unused `@ts-expect-error` should be removed.

Additionally, the `@ts-expect-error` comment must include a description, so that future developers can understand what the underlying issue was and how it might have been resolved.

### `no-public-secrets` rule

#### Explanation

It's possible to expose secrets through the env with NextJS, Gatsby, Vite, and Astro by prepending the env with a term specific to the framework, `NEXT_PUBLIC_`, `GATSBY_`, `VITE_`, and `PUBLIC_`, respectively. If such an env is used in client-side code, the framework replaces the term, `process.env.PUBLIC_KEY` with the value at build time `MY_KEY_IN_PLAINTEXT`.

This rule checks any such variable names for red flags that hint that sensitive material is being sent to the browser, i.e. variable names containing the terms `SECRET`, `PASSWORD`, or `PW`. For example, `process.env.CLIENT_SECRET` would not be caught by the linter, since it cannot be used client-side, while `process.env.NEXT_PUBLIC_CLIENT_SECRET` or `process.env.NEXT_PUBLIC_DATABASE_PW` would.

#### Usage

```
{
  "plugins": ["local-rules"],
  "rules": {
    "local-rules/no-public-secrets": "error",
  }
}
```

#### Handling Errors

There are three options for handling an error from this rule:

1. Remove the prepend (recommended) - If the var does not need to be available server-side, remove the prepend
2. Rename the var - If the var does need to be available server-side, it probably shouldn't include terms like `SECRET`. Consider removing the problematic term AFTER confirming that the key should not be secret. Most likely, it should.
3. Disable the rule - Avoid this at all costs. Public secrets and/or passwords should never be allowed.

#### Caveats

**_Cannot Catch Every Secret Key Leak_**

This is not a perfect linting rule. For example, `NEXT_PUBLIC_TOTALLY_SAFE_KEY` could in fact contain a private key, but there's no way to know that. This rule attempts to supplement, not replace, developer judgement for when to send information to the browser.

<hr />

## Contributing

### Committing Code to GitHub

This repo uses [Husky](https://typicode.github.io/husky/#/) and [@commitlint](https://commitlint.js.org/#/) to enforce commit messages that follow the [Conventional Commit](https://www.conventionalcommits.org) specification. Please refer to the [APS Playbook](https://apsphysics.atlassian.net/wiki/spaces/SWENG/pages/993786/Playbook#Conventional-Commits) for a quick reference.

### Publishing to GitHub Packages

This package is published automatically with a GitHub Action that is triggered via GitHub releases. Release drafts are created by the [np](https://www.npmjs.com/package/np) package by running the `npm run release` command. This will prompt you to select the appropriate version type (patch, minor, major, etc.) and will automatically create a detailed release draft containing all commit messages since the previous release. Once you save the release, the GitHub Action will automatically take care of publishing the new version of the package to the GitHub package registry.
