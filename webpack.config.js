// a core node.js module that gets used to manipulate files
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
         test: /\.css$/i,

        use: ['style-loader', 'css-loader'],
      },
       {// for images

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ]
  }
};

