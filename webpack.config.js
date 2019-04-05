const path = require('path');
const webpack = require("webpack")

module.exports = {
    mode: 'development',
    entry: [
      'babel-polyfill',
      './src/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    plugins: [
        //OccurrenceOrderPlugin is needed for webpack 1.x only
        //new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        //new webpack.NoEmitOnErrorsPlugin(),
        //new webpack.DefinePlugin({ 'process.env.IS_DEV': JSON.stringify(process.env.IS_DEV) })
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
            }
        ]
    },
    devServer: {
      port: 3000,
      open: false,
      compress: true,
      publicPath: "/",
      contentBase: path.join(__dirname, 'public'),
      proxy: {
        '/api': 'http://localhost:8000'
      },
      historyApiFallback: true
    }
};
