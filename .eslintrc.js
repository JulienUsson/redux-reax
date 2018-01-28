module.exports = {
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier',
      'prettier/react',
    ],
    plugins: ['react', 'prettier'],
    env: {
      browser: true,
      es6: true,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  }
  