const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Inform web pack builidng bundle
    target: 'node',

    //Tell webpack run
    entry: './src/index.js',

    //Tell webpack where to output
    output:{
        filename: 'bunde.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);