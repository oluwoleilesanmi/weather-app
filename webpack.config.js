const path = require("path");

module.exports = {
  entry: "./src/weather_app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: 9000
  }
};
