const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostCssFlexbugs = require('postcss-flexbugs-fixes');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = require('./paths');

const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));
const config = {
  devtool: isDevServer ? false : 'source-map',
  entry: paths.appIndex,
  output: {
    path: paths.appDocs,
    filename: `static/js/${isDevServer ? '[name]' : '[name].[chunkhash:8]'}.js`,
    publicPath: '/',
    devtoolModuleFilenameTemplate: info =>
      path.relative(paths.appSource, info.absoluteResourcePath),
  },
  resolve: {
    modules: [paths.appModules],
    extensions: ['.js', '.json', '.jsx'],
    plugins: [
      new ModuleScopePlugin(paths.appSource),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      use: [{
        options: { formatter: eslintFormatter },
        loader: 'eslint-loader',
      }],
      include: paths.appSource,
    }, {
      exclude: [/\.html$/, /\.(js|jsx)$/, /\.(css|scss)$/, /\.json$/, /\.svg/, /\.(jpg|jpeg)$/, /\.png$/],
      loader: 'file-loader',
      options: {
        name: 'static/media/[hash:8].[ext]',
      },
    }, {
      test: [/\.(jpg|jpeg)$/, /\.png$/, /\.svg$/],
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/img/[hash:8].[ext]',
      },
    }, {
      test: /\.(js|jsx)$/,
      include: paths.appSource,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              PostCssFlexbugs,
              autoprefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                flexbox: 'no-2009',
              }),
            ],
          },
        }],
      }),
    }],
  },
  plugins: [
    new CleanWebpackPlugin(paths.appDocs, {
      root: paths.appRoot,
      exclude: ['favicon.png', 'CNAME'],
      watch: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
  ],
};

if (!isDevServer) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      reduce_vars: false,
    },
    output: {
      comments: true,
    },
    sourceMap: !isDevServer,
  }));
}

module.exports = config;
