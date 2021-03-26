# UI library using React + Storybook with TypeScript

This is a boilerplate project for writing React NPM modules (or component libraries) in TypeScript + Storybook.

This boilderplate includes a [Storybook](https://storybook.js.org/) to visualize and demonstrate your components. The Storybook is automatically deployed to [Zeit](https://zeit.co) once configured (see the Storybook for this template [here](https://react-ts-module-boilerplate.develohpanda.now.sh)). This allows you to test each PR visually and in isolation.

# Features

- [TypeScript](tsconfig.json) with automatic linting via [ESLint](.eslintrc) + [Prettier](.prettierrc)
- Unit testing with [Jest](https://jestjs.io/) + [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org/) + hot reloading, including the addons [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions), [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs), [Storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource), [Notes](https://github.com/storybookjs/storybook/tree/master/addons/notes), [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport), [Console](https://github.com/storybookjs/storybook-addon-console), and [Centered](https://github.com/storybookjs/storybook/tree/master/addons/centered).

# Usage

1. Fork or clone this repository
2. If using VS Code, install recommended extensions
3. `npm install`
4. `npm run start:storybook`
5. Create your components
6. Export your components in [`index.ts`](index.ts)
7. `npm build` To build your React components befor deploying to NPM.
8. `npm publish` Publish your module.

## After puplish

## `npm` Scripts

- `test` - _run unit tests_
- `test:cover` - _run unit tests with test coverage_
- `lint` - _check `eslint` and `prettier` rules_
- `lint:fix` - _autofix unmet `eslint` and `prettier` rules_
- `start:storybook` - _start the storybook server and automatically open in browser_
- `build` - _for deployment_
- `build:storybook` - _run this command to build your storybook_
- `npm publish` - _run this command to publish your packages to npm_

Before each commit, `husky` and `lint-staged` will automatically lint your staged `ts, tsx, js, jsx` files.

# Configuration

## npm login

[npm login](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## Dependabot (optional)

I recommend enabling [Dependabot](https://dependabot.com/) on this repository to keep your dependencies up to date. Each dependency update will be created as a PR, which will automatically validate via Circle CI and you can manually validate via Zeit.

# License

This code is released under the [MIT license](LICENSE.md) - feel free to use it.

# Contribute

Please contribute any improvements or fixes to this project!

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.
