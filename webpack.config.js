const path = require('path')

const bourbon = require('node-bourbon').includePaths;

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
})

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'src/assets')
}

module.exports = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?includePaths[]=" + bourbon]
      },
      {
        test: /\.(jpg|jpeg)/,
        loader: 'file?name[path][name].[hash].[ext]',
        include: PATHS.assets
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}