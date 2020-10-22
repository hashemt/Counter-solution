module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    //  allow .js extensions for JSX.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'react/state-in-constructor': 0,
    'react/prop-types': 0,
  },
}
