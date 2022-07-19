const path = require("path");
// const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    // home: "./src/home.js",
  },
  devtool: 'inline-source-map',
  // plugins: [
  //   new HtmlwebpackPlugin({
  //     title: "Output Management",
  //   }),
  // ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};