const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Creates the index.html that references the hashed file name. You need to point this
// plugin at a template file because it will not add the "root" div for you. 
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Cleans up old build files in the /dist folder.
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
    main: path.join(__dirname, '../src/index.js')
  },
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist')
	},
	plugins: [
		new UglifyJSPlugin(),
		new MiniCssExtractPlugin({ filename: 'style.css' }),
		new HtmlWebpackPlugin({ template: path.join(__dirname, '../src/index.html') }),
		new CleanWebpackPlugin(['dist']),
	],
	module: {
		rules: [
			{
        test: /\.js$|\.jsx$/,
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
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
};
