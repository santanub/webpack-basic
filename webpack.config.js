var path = require('path');
//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'basic.css'
});

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
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
}