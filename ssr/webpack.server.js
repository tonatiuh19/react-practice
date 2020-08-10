const path = require('path');

module.exports = {
    //Inform web pack builidng bundle
    target: 'node',

    //Tell webpack run
    entry: './src/index.js',

    //Tell webpack where to output
    output:{
        filename: 'bunde.js',
        path: path.resolve(__dirname, 'build')
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