const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
//   TODO: Fix webpack dev server
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    devMiddleware: {
        publicPath: '/public/',
    },
  },
}