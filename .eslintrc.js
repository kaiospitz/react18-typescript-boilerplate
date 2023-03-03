/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: '**/*.ts',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
};
