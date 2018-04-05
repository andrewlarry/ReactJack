const path = require('path');

const config = {
  entry: '.client/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js', // Place where bundled app will be created
  },
  devServer: {
    inline: true, // Autorefresh
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
};

module.exports = config;
