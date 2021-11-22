// a core node.js module that gets used to manipulate files
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
