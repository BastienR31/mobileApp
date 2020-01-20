module.exports = function (api) {
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
            '@containers': './src/containers',
            '@screens': './src/components/screens',
            '@stores': './src/stores',
            '@reducers': './src/stores/reducers',
            '@utils': './src/utils',
            '@services': './src/services',
            '@assets': './assets',
            '@api': './src/api'
          }
        },
      ],
    ],
  };
};
