module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  env: {
    node: true,
  },
  rules: {
    'no-throw-literal': 'off',
    'import/prefer-default-export': 'warn',
  },
};
