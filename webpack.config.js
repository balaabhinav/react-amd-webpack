'use strict';

let webpack = require('webpack');
let path = require('path');
let BUILD_DIR = path.resolve(__dirname, 'public/');
let APP_DIR = path.resolve(__dirname, 'src/');
let isTest = false;
let config = {
	context : APP_DIR,
	resolve : {
		modules : ['.', 'node_modules']
	},
	entry : APP_DIR + '/index.js',
	output : {
		path : BUILD_DIR,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js?/,
				exclude : /node_modules/,
				loader : 'babel-loader'
			}
		]
	}
};

module.exports = config;