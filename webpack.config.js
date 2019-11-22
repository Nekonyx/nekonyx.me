const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const FaviconsPlugin = require('favicons-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { join: pathJoin } = require('path')

const isDev = !/mode(=| )production/.test(process.argv.join(' '))

const buildDir = pathJoin(__dirname, 'build')
const sourceDir = pathJoin(__dirname, 'src')

const config = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash:8].js',
    publicPath: '/',
    path: buildDir,
    libraryTarget: 'umd2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [sourceDir],
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            sourceMap: isDev
          }
        }
      },
      {
        exclude: /\.(css|html|jsx?|tsx?)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')(), require('cssnano')()]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new HtmlPlugin({
      minify: true,
      template: pathJoin(sourceDir, './assets/public/index.html')
    }),
    new CopyPlugin([
      { from: pathJoin(sourceDir, './assets/public'), to: buildDir }
    ]),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash:8].css'
    })
  ]
}

if (!isDev) {
  config.plugins.push(
    new FaviconsPlugin({
      logo: './src/assets/images/logo-light.png',
      inject: true,
      prefix: 'static/',
      favicons: {
        background: '#e4e4e4',
        theme_color: '#dcdcdc'
      }
    })
  )
}

module.exports = config
