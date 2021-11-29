const prettierrc = require('rc')('./prettier')

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'jsx-quotes': 'off',
    semi: 'off',
    '@typescript-eslint/no-explicit-any': 2,
    curly: 'off',
    'prettier/prettier': ['error', prettierrc],
  },
}
