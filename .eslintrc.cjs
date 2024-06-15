module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    /* 'func-style': ['warn', 'declaration'], */
    'no-duplicate-imports': 'warn',
    'no-magic-numbers': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'sort-imports': 'warn',
    'yoda': 'warn',
    'react/button-has-type': 'warn',
    'react/hook-use-state': 'warn',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true
      }
    ],
    'react/no-unused-prop-types': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': [
      'warn',
      { requiredFirst: true, sortShapeProp: true }
    ],
    'react-refresh/only-export-components': 'warn'
  }
}
