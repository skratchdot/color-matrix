/*
 * color-matrix
 * https://github.com/skratchdot/color-matrix
 * 
 * Data originally pulled from:
 * https://color-js.googlecode.com/svn/trunk/src/Color.matrix.js
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
exports.getData = function () {
	return {
		'normal': [
			[1, 0, 0, 0, 0],
			[0, 1, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0]
		],
		'protanomaly': [
			[0.817, 0.183, 0, 0, 0],
			[0.333, 0.667, 0, 0, 0],
			[0, 0.125, 0.875, 0, 0]
		],
		'deuteranomaly': [
			[0.8, 0.2, 0, 0, 0],
			[0.258, 0.742, 0, 0, 0],
			[0, 0.142, 0.858, 0, 0]
		],
		'tritanomaly': [
			[0.967, 0.033, 0, 0, 0],
			[0, 0.733, 0.267, 0, 0],
			[0, 0.183, 0.817, 0, 0]
		],
		'protanopia': [
			[0.567, 0.433, 0, 0, 0],
			[0.558, 0.442, 0, 0, 0],
			[0, 0.242, 0.758, 0, 0]
		],
		'deuteranopia': [
			[0.625, 0.375, 0, 0, 0],
			[0.7, 0.3, 0, 0, 0],
			[0, 0.3, 0.7, 0, 0]
		],
		'tritanopia': [
			[0.95, 0.05, 0, 0, 0],
			[0, 0.433, 0.567, 0, 0],
			[0, 0.475, 0.525, 0, 0]
		],
		'achromatopsia': [
			[0.299, 0.587, 0.114, 0, 0],
			[0.299, 0.587, 0.114, 0, 0],
			[0.299, 0.587, 0.114, 0, 0]
		],
		'achromatomaly': [
			[0.618, 0.320, 0.062, 0, 0],
			[0.163, 0.775, 0.062, 0, 0],
			[0.163, 0.320, 0.516, 0, 0]
		],
		'invert': [
	   		[-1, 0, 0, 0, 255],
	   		[0, -1, 0, 0, 255],
	   		[0, 0, -1, 0, 255]
	   	],
	   	'grayscale': [
	   		[0.299, 0.587, 0.114, 0, 0],
	   		[0.299, 0.587, 0.114, 0, 0],
	   		[0.299, 0.587, 0.114, 0, 0]
	   	],
	   	'sepia': [
	   		[0.393, 0.769, 0.189, 0, 0],
	   		[0.349, 0.686, 0.168, 0, 0],
	   		[0.272, 0.534, 0.131, 0, 0]
	   	],
	   	'nightvision': [
	   		[0.1, 0.4, 0, 0, 0],
	   		[0.3, 1, 0.3, 0, 0],
	   		[0, 0.4, 0.1, 0, 0]
	   	],
	   	'warm': [
	   		[1.06, 0, 0, 0, 0],
	   		[0, 1.01, 0, 0, 0],
	   		[0, 0, 0.93, 0, 0]
	   	],
	   	'cool': [
	   		[0.99, 0, 0, 0, 0],
	   		[0, 0.93, 0, 0, 0],
	   		[0, 0, 1.08, 0, 0]
	   	],
	   	'luminanceToAlpha': [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0.2125, 0.7154, 0.0721, 0, 0]
	   	]
	};
};