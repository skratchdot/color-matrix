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
 * matrix.transform([222, 0, 173, 255], 'deuteranopia'); // returns [139, 155, 121, 1]
 */
var filterData = require('./filters.js');

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
		crop(Math.round(rgba[3]), 0, 255)
	];
};

var multiply = function (rgba, m) {
	var ret = [], i, row;
	for (i = 0; i < 4; i++) {
		row = 5 * i;
		ret[i] = (rgba[0] * m[row + 0]) + (rgba[1] * m[row + 1]) + (rgba[2] * m[row + 2]) + (rgba[3] * m[row + 3]) + m[row + 4];
	}
	return cleanRGBA(ret);
};

var ColorMatrix = function () {
	var api = this,
		filters = filterData.getData();

	/**
	 * Stores a matrix in the list of available filters
	 * 
	 * @name addFilter
	 * @param {string} name the name of the filter
	 * @param {function} filter a function that returns a 20 item array representing a matrix with 4 rows and 5 columns
	 * @example
	 * colorMatrix.addFilter('myIndentityMatrix', function () {
	 *   return [
	 *     1, 0, 0, 0, 0,
	 *     0, 1, 0, 0, 0,
	 *     0, 0, 1, 0, 0,
	 *     0, 0, 0, 1, 0
	 *   ];
	 * }); // now you can call: colorMatrix.transform('myIndentityMatrix');
	 */
	api.addFilter = function (name, filter) {
		if (typeof filter === 'function' && !filters.hasOwnProperty(name)) {
			filters[name] = filter;
		}
	};

	/**
	 * Gets the filter with the given name. Returns an identity matrix
	 * when not found.
	 * 
	 * @name getFilter
	 * @param {string} name the name of the filter
	 * @returns {function} A function that returns a 5x4 matrix
	 * @example
	 * var fn = colorMatrix.getFilter('deuteranopia');
	 * var result = fn([255, 0, 0, 255]); // result contains an rgba array
	 */
	api.getFilter = function (name) {
		return filters[name];
	};

	/**
	 * @name getFilters
	 * @returns {object} A hash of all the filter functions.
	 * @example
	 * var filterFunctions = colorMatrix.getFilters();
	 * var result = filterFunctions.cold([255, 0, 0, 255]);
	 */
	api.getFilters = function () {
		var ret = {};
		Object.keys(filters).forEach(function (filterName) {
			ret[filterName] = api.getFilter(filterName);
		});
		return ret;
	};

	/**
	 * @name transform
	 * @param {array} rgba An RGBA array
	 * @param {string} filter The name of the filter function
	 * @param {number|array} value The value to pass to the filter function
	 * @example
	 * var result1 = colorMatrix.transform([255, 0, 0, 255], 'invert');
	 * var result2 = colorMatrix.transform([255, 0, 0, 255], 'hueRotate', 180);
	 */
	api.transform = function (rgba, filter, value) {
		return multiply(rgba, (api.getFilter(filter))(value));
	};

	// create functions for the default filters
	var createFilter = function (filter) {
		return function (rgba, value) {
			return api.transform(rgba, filter, value);
		};
	};
	for (var filter in filters) {
		api[filter] = createFilter(filter);
	}

	return api;
};

exports.ColorMatrix = function () {
	return new ColorMatrix();
};
