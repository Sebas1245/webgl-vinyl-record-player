const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    clean: true,
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'static' }
        ]
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    devMiddleware: {
        publicPath: '/',
    },
  },
}