const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


const config = {
    //Tell webpack run
    entry: './src/client/client.js',

    //Tell webpack where to output
    output:{
        filename: 'bunde.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);