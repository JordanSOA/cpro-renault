const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'exo1.js'),
    resolve: {
        extensions: [
            '.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'exo1/build')
    },
    devtool: 'inline-source-map'
};