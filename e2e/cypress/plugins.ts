/**
 * Webpack preprocessor example which does not load the tests by throwing a "cannot read 'fallback' from undefined" error.
 * Some interesting issue links:
 * - https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/issues/390
 */

const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on: any) => {
  const options = {
    webpackOptions: require('./webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
};

/**
 * Browserify preprocessor example which works but can't read the tsconfig paths aliases.
 * Some interesting issue links:
 * - https://stackoverflow.com/questions/65426454/cypress-webpack-preprocesor-alias-doesnt-work
 */

// const browserify = require('@cypress/browserify-preprocessor');
// const cucumber = require('cypress-cucumber-preprocessor').default;
// const resolve = require('resolve');
//
// module.exports = (on, config) => {
//   const options = {
//     ...browserify.defaultOptions,
//     typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
//   };
//
//   on('file:preprocessor', cucumber(options));
// };
