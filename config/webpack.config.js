import webpack from 'webpack';
import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @returns {webpack.Configuration}
 */
export default function (env) {

  // Declare config constants
  const MODE = 'development';
  const isProduction = (MODE !== 'development');

  // Paths constants
  const ROOT_PATH = path.join(__dirname, '..');
  const ENTRY_PATH = path.join(ROOT_PATH, './src/index.js');
  const OUTPUT_PATH = path.join(ROOT_PATH, './dist');

  // Hot Middleware
  const HOST = 'localhost';
  const PORT = 3000;
  const HOT_MW = `webpack-hot-middleware/client?path=http://${HOST}:${PORT}/__webpack_hmr&reload=true`;

  /**
   * Webpack configuration for Magnetos Client
   * @type {webpack.Configuration}
   */
  const config = {
    context: ROOT_PATH,
    target: 'web',
    devtool: 'source-map',
    mode: MODE,
    entry: {
      app: (isProduction) ? [ENTRY_PATH] : [ENTRY_PATH, HOT_MW],
    },
    output: {
      path: OUTPUT_PATH,
      filename: '[name].js',
      hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
      hotUpdateMainFilename: ".hot/[hash].hot-update.json",
      pathinfo: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
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
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            {
              loader: 'file-loader',
              options: {
                useRelativePaths: true,
                name: '[name].[ext]',
                outputPath: 'img/'
              }
            },
            // 'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
          ],
        },
      ],
    },
    optimization: {
      minimize: isProduction,
    },
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,
      __filename: false
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ multiStep: false }), // enable HMR globally
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(ROOT_PATH, "./static/index.html"),
        cache: isProduction === false,
      }),
    ]
  };


  return config;
}