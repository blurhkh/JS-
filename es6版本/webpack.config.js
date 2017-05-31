let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: './src/test.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'test.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }, 
    plugins:[
        new webpack.LoaderOptionsPlugin({
         options: {
           sourceMap: true
         }
       })
    ]
}  