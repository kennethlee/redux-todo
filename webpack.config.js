var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/Index.js',
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' },
    ],
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  query: {
    cacheDirectory: true,
    plugins: [
      'transform-runtime',
      'add-module-exports',
      'transform-decorators-legacy',
    ],
    presets: ['es2015', 'react'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
