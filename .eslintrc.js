module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  env: {
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-throw-literal': 'off',
    'import/prefer-default-export': 'warn',
  },
};
