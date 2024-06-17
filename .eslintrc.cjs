module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'func-style': ['warn', 'expression'],
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true }],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'yoda': 'warn',
    'react/button-has-type': 'error',
    'react/hook-use-state': 'warn',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
        shorthandFirst: true,
        callbacksLast: true
      }
    ],
    'react/no-unused-prop-types': 'warn',
    'react/sort-prop-types': [
      'warn',
      { ignoreCase: true, sortShapeProp: true }
    ],
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],
    'import/order': [
      'warn',
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        'groups': [['builtin', 'external'], 'internal'],
        'pathGroups': [
          {
            pattern: '@images/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@**',
            group: 'internal'
          }
        ],
        'pathGroupsExcludedImportTypes': ['@**'],
        'distinctGroup': true
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
}
