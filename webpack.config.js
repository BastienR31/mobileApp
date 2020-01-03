const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
            Screens: path.resolve(__dirname, './src/components/screens/')
        }
    },
};
