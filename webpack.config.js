const path = require('path');
const webpack = require("webpack")

module.exports = {
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      './src/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    plugins: [
        // OccurrenceOrderPlugin is needed for webpack 1.x only
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              }]
            },
            {
              test: /\.json$/,
              loader: 'json',
            }
        ]
    },
    devServer: {
      port: 3000,
      open: false,
      proxy: {
        '/api': 'http://localhost:8000'
      }
    }
};
