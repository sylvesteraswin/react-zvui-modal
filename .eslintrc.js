module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [0],
  },
  globals: {
    __PROP_TYPES__: true,
  },
};
