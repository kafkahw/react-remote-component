var path = require('path'),
  webpack = require('webpack'),
  pkg = require('./package.json');

module.exports = {
  entry: {
    'application': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].' + pkg.version + '.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
            }
          }
        ]
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
};
