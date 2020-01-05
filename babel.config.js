module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          "root": ["./"],
          'alias': {
            '@components': './src/components',
            '@organisms': './src/components/organisms',
            '@screens': './src/components/screens',
            '@stores': './src/stores',
            '@utils': './src/utils',
            '@services': './src/services',
            '@assets': './assets',
          }
        },
      ],
    ],
  };
};
