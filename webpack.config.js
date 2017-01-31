var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/public/index.html',
    filename: 'index.html',
    inject: 'body',
    favicon: __dirname + "/public/favicon.ico",
});
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: 'src/libs/ThreeJS', to:'src/libs/ThreeJS'
}]);

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
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
};