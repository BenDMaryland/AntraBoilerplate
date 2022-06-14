const path = require('path');

module.exports = {
mode:"development",
    entry: "./lib/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};