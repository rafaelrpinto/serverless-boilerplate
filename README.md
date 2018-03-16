# serverless-boilerplate

Minimal boilerplate for Node.js serverless functions using Babel, Flow, Webpack 4, Serverless Offline and AirBNB linting.

# Requirements

* You need Node.js version >= 6.11 (Webpack 4 requirement)

# Running locally

```bash
yarn start
```

# Deploying

```bash
export AWS_PROFILE=myprofile && export AWS_REGION=eu-west-2 && yarn run deploy
```

# Undeploying

```bash
export AWS_PROFILE=myprofile && export AWS_REGION=eu-west-2 && yarn run remove
```

# Credits

Based on: https://github.com/shashanktomar/serverless-webpack-babel-boilerplate
