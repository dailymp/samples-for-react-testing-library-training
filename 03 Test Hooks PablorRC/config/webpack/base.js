const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const merge = require('webpack-merge');
const helpers = require('./helpers');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['./index.tsx', './content/styles.css'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            useCache: true,
            babelCore: '@babel/core',
          },
        },
        {
          test: /\.css$/,        
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
      new CheckerPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ],
  }
);
