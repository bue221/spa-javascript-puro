const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 3000 // <--- Add this line and choose your own port number
      },
    plugins: [
        new HtmlWebPackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        )
    ]

}