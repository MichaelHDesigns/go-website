const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/home/devilking6105/go-website/src/index.js',
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