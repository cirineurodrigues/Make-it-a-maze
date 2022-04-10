const path = require("path");

module.exports = {
  mode: "development",
  entry: "js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
