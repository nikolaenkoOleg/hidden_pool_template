const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.sass|scss|css$/i,
        use: [ 'style-loader','css-loader','sass-loader' ],
      },
      {
        test: /\.(woff(2)?|ttf|png)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000
  },
};
