const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const config = {
  entry: "./js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    hot: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new ESLintPlugin(),
  ],
};

module.exports = config;
