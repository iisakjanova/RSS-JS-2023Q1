module.exports = {
  env: {
    'es2022': true,
    'node': true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base', 
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'prettier', 
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    'import/extentions': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
