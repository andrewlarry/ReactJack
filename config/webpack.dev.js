const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
    main: path.join(__dirname, '../src/index.js')
  },
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-2']
        }
      },
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},

	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	mode: 'development'
};

