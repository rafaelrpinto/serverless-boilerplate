module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-throw-literal': 'off',
    'import/prefer-default-export': 'off',
  },
};
