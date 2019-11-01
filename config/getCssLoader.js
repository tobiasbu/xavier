const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default function getCssLoader(isProduction) {
  /**
   * @type {webpack.Loader[]}
   */
  const cssLoader = [];
  if (isProduction) {
    cssLoader.push({
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
      },
    });
  } else {
    cssLoader.push('style-loader');
  }

  cssLoader.push({ loader: 'css-loader', }
  );
  return cssLoader;
}