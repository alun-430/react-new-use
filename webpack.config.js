const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
// webpack V4/v5 没有多大变化
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack v5 之后，不再使用 CleanWebpackPlugin 来处理构建前清理 /dist 文件夹的工作
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    /**
     * codeSpliting 实现，第二种方法：防止重复（Prevent Duplication）
     * ① 入口依赖（Entry dependencies）
     * 会生成一个 shared.bundle.js, lodash 被提取到里面
     */
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // lodash: {
    //   import: './src/lodash.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
    index: './src/index.js',
    /**
     * codeSpliting 实现，第二种方法：防止重复（Prevent Duplication）
     * ② 使用 splitChunkPlugin
     * 会将第三方公共的包提取出来，生成单独的 js
     * 这里会将 react-dom，lodash 提取出来生成两个 js
     * index.bundle.js 和 lodash.bundle.js 会明显减小
     */
    // lodash: './src/lodash.js',
  },
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
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    /**
     * codeSpliting 实现，第二种方法：防止重复（Prevent Duplication）
     * 配合上面的入口依赖（Entry dependencies），在一个 html 上面生成多个入口
     * 会生成一个 runtime.bundle.js
     */
    // runtimeChunk: 'single',
    /**
     * codeSpliting 实现，第二种方法：防止重复（Prevent Duplication）
     * ② 使用 splitChunkPlugin
     * 会将第三方公共的包提取出来，生成单独的 js
     * 这里会将 react-dom，lodash 提取出来生成两个 js
     * index.bundle.js 和 lodash.bundle.js 会明显减小
     */
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
};
