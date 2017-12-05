const path = require('path');

module.exports = {
    entry: './front-end-src/js/app.js',
    output: {
        path: path.join(__dirname, '/front-end-transpiled/js'),
        filename: 'transpiled.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
      }
};