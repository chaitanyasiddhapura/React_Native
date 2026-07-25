module.exports = {
  presets: ['module:@react-native/babel-preset'],
    plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
        },      
      },
    ],
    // Other plugins can be added here
    
  ],
};
