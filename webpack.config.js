var path = require('path');
var webpack = require('webpack');

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
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // ...
        })
    ]*/
}