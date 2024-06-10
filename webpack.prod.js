const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
      new CopyWebpackPlugin({
          patterns: [
              {
                  from: 'example_standalone.html', 
                  to: 'example_standalone.html'
              }
          ]
      }),
  ]
});