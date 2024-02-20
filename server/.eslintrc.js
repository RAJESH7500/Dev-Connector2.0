module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'off',
    'line-comment-position': ['error', { position: 'above' }],
    'consistent-return': 'off',
  },
  plugins: ['prettier'],
};
