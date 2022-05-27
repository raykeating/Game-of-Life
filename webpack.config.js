const path = require('path');
const { experiments } = require('webpack');

module.exports = {
    mode: 'development',
    entry: '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true
    }
};