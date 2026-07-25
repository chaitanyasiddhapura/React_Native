module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src' : './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
