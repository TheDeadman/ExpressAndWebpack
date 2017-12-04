const path = require('path');
console.log(path.join(__dirname, '/front-end-transpiled/js'));
module.exports = {
    entry: './front-end-src/js/app.js',
    output: {
        path: path.join(__dirname, '/front-end-transpiled/js'),
        filename: 'transpiled.js'
    }
};