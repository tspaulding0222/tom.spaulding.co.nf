var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body',
    favicon: __dirname + "/public/favicon.ico",
});

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    debug: true,
    devtool: "source-map",
    module:{
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};