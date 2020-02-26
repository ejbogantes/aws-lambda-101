const path = require("path");
// eslint-disable-next-line import/no-unresolved
const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: "commonjs",
    filename: "[name].js",
    path: path.join(__dirname, ".webpack")
  },
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        // includes .js files
        test: /\.js$/,
        // preloads the jshint loader
        enforce: "pre",
        // exclude any and all files in the node_modules folder
        exclude: /node_modules/,
        include: __dirname,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
