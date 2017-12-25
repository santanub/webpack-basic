var path = require('path');
//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'basic.css'
});

var htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "index.html"
})

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "src/distributor"),
        filename: "bundle.js",
        publicPath: "/src/distributor"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }

                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/distributor/img/',
                            publicPath: 'src/distributor/img/'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        extractPlugin,
        htmlWebpackPlugin,
        new CleanWebpackPlugin(["src/distributor"])
    ]
}