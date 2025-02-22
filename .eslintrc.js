module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-native', '@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    'react-native/no-raw-text': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'off',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
  },
  overrides: [
    {
      files: ['./functions/**/*.ts', './graphql/**/*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parserOptions: {
        project: './functions/taxfy/tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      env: {
        es6: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'off',
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
      },
    },
    {
      files: ['./webapp/**/*.ts', './webapp/**/*.tsx'],
      extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parserOptions: {
        project:
          process.env.NODE_ENV === 'production'
            ? './tsconfig.json'
            : './webapp/tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-hooks'],
      env: {
        browser: true,
        es2021: true,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-empty-function': 0,
        'react-native/no-inline-styles': 0,
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'off',
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
      },
    },
  ],
}
