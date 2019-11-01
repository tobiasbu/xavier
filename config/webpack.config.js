import webpack from 'webpack';
import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

import getCssLoader from './getCssLoader';

/**
 * @typedef { import("webpack").Configuration } Configuration
 */

/**
 * @return { Configuration }
 */
export default function (env) {

  // Declare config constants
  const MODE = (env.PROD) ? 'production' : 'development';
  const isProduction = (MODE !== 'development');

  // Paths constants
  const ROOT_PATH = path.join(__dirname, '..');
  const ENTRY_PATH = path.join(ROOT_PATH, './src/index.jsx');
  const OUTPUT_PATH = path.join(ROOT_PATH, (isProduction) ? './build' : './dist');

  // Hot Middleware
  const HOST = 'localhost';
  const PORT = 3000;
  const HOT_MW = `webpack-hot-middleware/client?path=http://${HOST}:${PORT}/__webpack_hmr&reload=true&noInfo=true&quiet=true`;


  /**
   * Webpack configuration for Xavier Client
   * @type { Configuration }
   */
  const config = {
    context: ROOT_PATH,
    // target: 'web',
    devtool: 'source-map',
    mode: MODE,
    entry: {
      app: (isProduction) ? [ENTRY_PATH] : [ENTRY_PATH, HOT_MW],
    },
    output: {
      path: OUTPUT_PATH,
      filename: '[name].bundle.js',
      hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
      hotUpdateMainFilename: ".hot/[hash].hot-update.json",
      pathinfo: isProduction === false,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "@vendor": path.resolve(ROOT_PATH, "vendor"),
        "@utils": path.resolve(ROOT_PATH, "src/utils"),
        "@API": path.resolve(ROOT_PATH, "src/api/index.js"),
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env'],
            babelrc: true,
          }
        },
        {
          test: /\.css$/i,
          use: getCssLoader(isProduction),
          //use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            {
              loader: 'file-loader',
              options: {
                useRelativePaths: true,
                name: (env.isProduction) ? '[sha512:hash:hex:9].[ext]' : '[name].[ext]',
                outputPath: (url, resourcePath, context) => {
                  // `resourcePath` is original absolute path to asset
                  if (/.svg$/i.test(resourcePath)) {
                    return `icons/${url}`;
                  }
                  return `img/${url}`;
                },
              }
            },
            // 'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
            // 'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      splitChunks: {
        name: false,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 3,
          },
        }
      }
    },
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,
      __filename: false
    },
    plugins: [],
    stats: 'errors-warnings',
  };

  // Commons plugins
  config.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(ROOT_PATH, "./static/index.html"),
    cache: isProduction === false,
  }));

  if (!isProduction) {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin({ multiStep: false }), // enable HMR globally
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
    );
  } else {
    // Optimize
    config.optimization.minimize = true;
    config.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: 5,
          safari10: true,
        },
        exclude: /node_modules/,
      })
    ];
    // Minify CSS
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    );
  }



  const withEslint = true;
  // This is only should not be used if you want to code fast
  if (withEslint) {
    config.module.rules.unshift(
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      });
  }


  return config;
}