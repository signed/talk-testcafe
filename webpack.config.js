const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.tsx',
    stacktrace: './src/stacktrace/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './stacktrace.html',
      chunks: ['stacktrace'],
    }),
  ],
}
