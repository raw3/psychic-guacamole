/**
 * Webpack preprocessor example which does not load the tests by throwing a "cannot read 'fallback' from undefined" error.
 */

const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on: any) => {
  const options = {
    webpackOptions: require('./webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
};
