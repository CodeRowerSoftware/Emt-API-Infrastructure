var webpack = require('webpack');
const path = require('path');
var PACKAGE = require('./package.json');
var banner = PACKAGE.name + ' - ' + new Date().toUTCString() + ' | ' +
  '(c) ' + new Date().getFullYear() + '  ' + PACKAGE.author.name + ' | ' +
  PACKAGE.license + ' | ' +
  PACKAGE.author.url;

module.exports = {
  entry: path.join(__dirname, '/src/index.ts'),
  output: {
    filename: 'dist/index.js',
    path: __dirname,
    library: 'EmtShared',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new webpack.DefinePlugin({
      // If BUILD_DEV is in process environment, return true. Otherwise,
      // return (void 0). BUILD_DEV=1 before webpack command will do the job.
      __DEV__: process.env.BUILD_DEV && 'true'
    }),
    new webpack.BannerPlugin(banner)
  ]
};
