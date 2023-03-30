const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...other config options...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ], 

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
  // ...other config options...
};