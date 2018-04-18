[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) ![Dependencies](https://david-dm.org/rafaelrpinto/serverless-boilerplate.svg)

### Overview

Starter boilerplate for Node.js serverless functions with:

* Babel + Babel Minify + ENV target Node 8.10 (This reduces the required transformations)
* Source maps support
* Flow
* Jest
* Webpack 4
* Serverless Offline for local execution
* AirBnb linting

### Requirements

* Node.js version >= 8.10
* Yarn

### Running locally

```bash
yarn start
```

### Deploying

```bash
export AWS_PROFILE=myprofile && export AWS_REGION=eu-west-2 && yarn run deploy
```

### Undeploying

```bash
export AWS_PROFILE=myprofile && export AWS_REGION=eu-west-2 && yarn run remove
```

### Credits

Based on: https://github.com/shashanktomar/serverless-webpack-babel-boilerplate
