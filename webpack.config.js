const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
        clean: true
    },
    mode: 'production',
    module: {
        rules: [
        {
            test: /\.?ts[x]$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    resolve: {
        extensions: ["...",".tsx"]
    }
}