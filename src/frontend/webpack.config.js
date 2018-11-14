const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/public/index.jsx',
    output: { 
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer:{
        port:8080,
        contentBase: './public',
    },
    resolve: {
        extension: ['', 'js' ,'jsx'],
        alias:{
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.cs')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
        }]
    }
}
