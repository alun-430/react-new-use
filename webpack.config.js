const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
// webpack V4/v5 没有多大变化
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack v5 之后，不再使用 CleanWebpackPlugin 来处理构建前清理 /dist 文件夹的工作
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 代替 CleanWebpackPlugin 插件，在每次构建前清理 /dist 文件夹
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '测试新特性',
    }),
  ],
};
