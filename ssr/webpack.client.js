const path = require('path');

module.exports = {
    //Tell webpack run
    entry: './src/client/client.js',

    //Tell webpack where to output
    output:{
        filename: 'bunde.js',
        path: path.resolve(__dirname, 'public')
    },

    //Tell webpack to run babel
    module:{
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};