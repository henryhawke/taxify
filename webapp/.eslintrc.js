module.exports = {
  extends: ['../.eslintrc.js'],
  parserOptions: {
    project: ['../tsconfig.json', './tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['../tsconfig.json', './tsconfig.json'],
      },
    },
  },
}
