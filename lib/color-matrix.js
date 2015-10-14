'use strict';
/**
 * color-matrix
 * https://github.com/skratchdot/color-matrix
 * 
 * @module ColorMatrix
 * @description
 * Apply filters to colors to simulate things like color blindness and night vision.
 * Tries to mimic the behavior of the svg feColorMatrix filter.
 * 
 * For more information about svg feColorMatrix:
 * 
 * - https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
 * - http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
 * 
 * This library uses modified logic from the following 3 resources:
 * 
 * - https://color-js.googlecode.com/svn/trunk/src/Color.matrix.js
 * - http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
 * - http://stackoverflow.com/questions/87146/rgb-filters-for-different-forms-of-color-blindness
 * 
 * @author skratchdot
 * @license MIT
 * @copyright Copyright (c) 2014 skratchdot.com
 * @example
 * var ColorMatrix = require('color-matrix').ColorMatrix;
 * var matrix = new ColorMatrix();
 * matrix.transform('#de00ad', 'deuteranopia'); // returns [139, 155, 121, 1]
 */
var Matrix = require('matrixjs');
var presetData = require('./preset-data.js');
var onecolor = require('onecolor');

var crop = function (value, min, max) {
	value = Math.max(value, min);
	value = Math.min(value, max);
	return value;
};

var cleanRGBA = function (rgba) {
	return [
		crop(Math.round(rgba[0]), 0, 255),
		crop(Math.round(rgba[1]), 0, 255),
		crop(Math.round(rgba[2]), 0, 255),
		crop(rgba[3], 0, 1),
	];
};

var toMatrix = function (values, rows, cols, max) {
	var i, j, index, matrix, valueArray;
	rows = rows || 0;
	cols = cols || 0;
	max = max || (rows * cols);
	matrix = new Matrix(rows, cols);
	valueArray = values.toString()
		.replace(/[^0-9\.\-\ ]/gi, ' ')
		.replace(/[ ]+/g, ' ')
		.trim()
		.split(' ')
		.map(parseFloat)
		.filter(function (val) {
			return !Number.isNaN(val);
		})
		.slice(0, max);
	// setup identity
	for (i = 0; i < matrix.rows; i++) {
		for (j = 0; j < matrix.cols; j++) {
			index = (i * matrix.cols) + j;
			if (i === j) {
				matrix[i][j] = 1;
			}
			if (index < valueArray.length) {
				matrix[i][j] = valueArray[index];
			}
		}
	}
	return matrix;
};

var ColorMatrix = function () {
	var api = this,
		presets = presetData.getData();

	/**
	 * Stores a matrix in the list of available presets
	 * 
	 * @name addPreset
	 * @param {string} name the name of the preset
	 * @param {array|string} matrix the 5x5 color matrix
	 * @example
	 * colorMatrix.addPreset('myIndentityMatrix', [
	 *   [1, 0, 0, 0, 0],
	 *   [0, 1, 0, 0, 0],
	 *   [0, 0, 1, 0, 0],
	 *   [0, 0, 0, 1, 0],
	 *   [0, 0, 0, 0, 1]
	 * ]); // now you can call: colorMatrix.transform('myIndentityMatrix');
	 */
	api.addPreset = function (name, matrix) {
		presets[name] = matrix;
	};

	/**
	 * Gets the preset with the given name. Returns an identity matrix
	 * when not found.
	 * 
	 * @name getPreset
	 * @param {string} name the name of the preset
	 * @returns {array} The 5x5 matrix if found, a 5x5 identity matrix if not found
	 * @example
	 * colorMatrix.getPreset('deuteranopia'); // returns [
	 *                                        //   [0.625, 0.375, 0, 0, 0],
	 *                                        //   [0.7, 0.3, 0, 0, 0],
	 *                                        //   [0, 0.3, 0.7, 0, 0],
	 *                                        //   [0, 0, 0, 1, 0],
	 *                                        //   [0, 0, 0, 0, 1]
	 *                                        // ];
	 */
	api.getPreset = function (name) {
		var m = presets[name], ret;
		if (m) {
			ret = toMatrix(m, 5, 5);
		} else {
			ret = new Matrix.identity(5);
		}
		return ret.clone();
	};

	/**
	 * @name getPresets
	 * @returns {object} A hash of all the preset matrices.
	 */
	api.getPresets = function () {
		var ret = {};
		Object.keys(presets).forEach(function (presetName) {
			ret[presetName] = api.getPreset(presetName);
		});
		return ret;
	};

	/**
	 * @name toMatrix
	 * @param {array|string} values Convert a string or partial array to a `new Matrix(5, 5)`;
	 * @example
	 * colorMatrix.toMatrix('0 5 5'); // returns: new Matrix([
	 *                                //   [0, 5, 5, 0, 0],
	 *                                //   [0, 1, 0, 0, 0],
	 *                                //   [0, 0, 1, 0, 0],
	 *                                //   [0, 0, 0, 1, 0],
	 *                                //   [0, 0, 0, 0, 1],
	 *                                // ]);
	 */
	api.toMatrix = function (values) {
		return toMatrix(values, 5, 5);
	};

	/**
	 * @name toMatrixRGBA
	 * @description Convert an RGBA array or a CSS color string to a 5x1 matrix
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 * @returns {Matrix} A 5x1 Matrix
	 * @example
	 * colorMatrix.toMatrixRGBA('red'); // returns [[255],[0],[0],[1],[1]]
	 * colorMatrix.toMatrixRGBA([0,255,0,0.7]); // returns [[0],[255],[0],[0.7],[1]]
	 */
	api.toMatrixRGBA = function (inputColor) {
		var color, i;
		if (Array.isArray(inputColor)) {
			color = [0,0,0,1,1];
			for (i = 0; i < inputColor.length; i++) {
				color[i] = inputColor[i];
			}
		} else {
			color = onecolor(inputColor);
			if (!color) {
				color = '0,0,0,1,1';
			} else {
				color = color.cssa()
					.replace('rgba(', '')
					.replace(')','') + ',1';
			}
		}
		return toMatrix(color, 5, 1);
	};

	/**
	 * @name transform
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 * @param {string} name the name of a preset, a matrix, or a matrix string
	 */
	api.transform = function (inputColor, nameOrValues) {
		var values = nameOrValues;
		if (presets.hasOwnProperty(nameOrValues)) {
			values = (api.getPreset(nameOrValues)).toArray();
		}
		return api.matrix(inputColor, values);
	};

	/**
	 * @name matrix
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 * @param {array|string} values A list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
	 */
	api.matrix = function (inputColor, values) {
		var colorMatrix, valuesMatrix;
		colorMatrix = api.toMatrixRGBA(inputColor);
		valuesMatrix = api.toMatrix(values);
		return cleanRGBA(valuesMatrix.multiply(colorMatrix).toArray());
	};

	/**
	 * @name saturate
	 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
	 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-saturate.c
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 * @param {number} value a single real number value (0 to 1)
	 */
	api.saturate = function (inputColor, value) {
		var colorMatrix, valuesMatrix, values;
		value = crop(value, 0, 1);
		values = [
			0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value, 0, 0,
			0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value, 0, 0,
			0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value, 0, 0
		];
		colorMatrix = api.toMatrixRGBA(inputColor);
		valuesMatrix = api.toMatrix(values);
		return cleanRGBA(valuesMatrix.multiply(colorMatrix).toArray());
	};

	/**
	 * @name hueRotate
	 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
	 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-huerotate.c
	 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 * @param {number} value a single real number value (in degrees)
	 */
	api.hueRotate = function (inputColor, value) {
		var colorMatrix, valuesMatrix, subMatrix, values;
		value = crop(value, 0, 360);
		subMatrix = (new Matrix([
			[0.213, 0.715, 0.072],
			[0.213, 0.715, 0.072],
			[0.213, 0.715, 0.072]
		])).add(
			(new Matrix([
				[0.787, -0.715, -0.072],
				[-0.213, 0.285, -0.072],
				[-0.213, -0.715, 0.928]
			])).scalar(Math.cos(value))
		).add(
			(new Matrix([
				[-0.213, -0.715, 0.928],
				[0.143, 0.140, -0.283],
				[-0.787, 0.715, 0.072]
			])).scalar(Math.sin(value))
		);
		values = [
			subMatrix[0][0], subMatrix[0][1], subMatrix[0][2], 0, 0,
			subMatrix[1][0], subMatrix[1][1], subMatrix[1][2], 0, 0,
			subMatrix[2][0], subMatrix[2][1], subMatrix[2][2], 0, 0
		];
		colorMatrix = api.toMatrixRGBA(inputColor);
		valuesMatrix = api.toMatrix(values);
		return cleanRGBA(valuesMatrix.multiply(colorMatrix).toArray());
	};

	/**
	 * @name luminanceToAlpha
	 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
	 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-luminancetoalpha.c
	 * @param {array|string} inputColor An RGBA array or CSS color string
	 */
	api.luminanceToAlpha = function (inputColor) {
		return api.transform(inputColor, 'luminanceToAlpha');
	};

	// create functions for the default presets
	var createPreset = function (preset) {
		return function (inputColor) {
			return api.transform(inputColor, preset);
		};
	};
	for (var preset in presets) {
		api[preset] = createPreset(preset);
	}

	return api;
};

exports.ColorMatrix = function () {
	return new ColorMatrix();
};
