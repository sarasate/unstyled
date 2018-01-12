const { resolve } = require("path");
const webpack = require("webpack");

const baseDir = resolve(__dirname, "docs");

module.exports = {
  context: baseDir,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./index.js"
  ],
  output: {
    filename: "bundle.js",
    path: baseDir,
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: baseDir,
    publicPath: "/",
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    alias: {
      unstyled: resolve(__dirname, "src")
    }
  }
};
