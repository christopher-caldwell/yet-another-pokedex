module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['*.ts', '*.tsx', '*.json'],
        alias: {
          '@': './src/',
          'shared-types': '../shared-types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
