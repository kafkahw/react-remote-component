var path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    'application': [
      './src/index.js'
    ]
  },

  output: {
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            }
          }
        ]
      }
    ],
  },

  devServer: {

    disableHostCheck: true,

  },

  devtool: 'cheap-module-source-map',
};
