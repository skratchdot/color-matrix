/*
 * color-matrix
 * https://github.com/skratchdot/color-matrix
 * 
 * This library uses modified logic from the following 3 resources:
 * 
 * - https://color-js.googlecode.com/svn/trunk/src/Color.matrix.js
 * - http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
 * - http://stackoverflow.com/questions/87146/rgb-filters-for-different-forms-of-color-blindness
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

var presetData = require('./preset-data.js');
var onecolor = require('onecolor');

// gets a value in a 2d matrix.
var getFromMatrix = function (matrix, row, col) {
	matrix = matrix || [];
	matrix = matrix[row] || [];
	return matrix[col] || (row === col ? 1 : 0);
};

// denormalize rgb from 0-1 to 0-255
var denorm = function (color, prop) {
	return Math.round(color[prop]() * 255);
};

//var r=((o.R*m[0])+(o.G*m[1])+(o.B*m[2])+(o.A*m[3])+m[4]);


var convert = function (color, matrix) {
	var i, j,
		ret = [0, 0, 0, 0],
		rgb = [denorm(color, 'red'), denorm(color, 'blue'), denorm(color, 'green'), color.alpha(), 1];
	for (i = 0; i < 4; i++) {
		for (j = 0; j < 5; j++) {
			ret[i] += getFromMatrix(matrix, i, j) * rgb[j];
		}
	}
	return new onecolor.RGB(
		(ret[0] % 256) / 255,
		(ret[1] % 256) / 255,
		(ret[2] % 256) / 255,
		ret[3]
	).hex();
};

var ColorMatrix = function () {
	var api = this,
		presets = presetData.getData();

	api.addPreset = function (name, matrix) {
		presets[name] = matrix;
	};

	api.getPreset = function (name) {
		return presets[name];
	};

	api.getPresets = function () {
		return presets;
	};

	api.transform = function (colorString, filter) {
		var color = onecolor(colorString);
		// default to black if we can't parse
		if (!color) {
			return '#000000';
		}
		if (presets.hasOwnProperty(filter)) {
			filter = presets[filter];
		}
		return convert(color, filter);
	};
/*
	
	api.
    For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
    For type="saturate", values is a single real number value (0 to 1).
    For type="hueRotate", values is a single one real number value (degrees).
    For type="luminanceToAlpha", values is not applicable.
*/
	// values is a string of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
	api.matrix = function (color, values) {
		// convert to array
		var arr = [values]
		  .join(' ')
		  .replace(',',' ','g')
		  .replace(/[ ]+/g, ' ')
		  .trim()
		  .split(' ');
	};

	// value is a single real number value (0 to 1)
	api.saturate = function (color, value) {
		// see: https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-saturate.c
	};

	// value is a single real number value (in degrees)
	api.hueRotate = function (color, value) {
		// see: https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-huerotate.c
		// see also: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
	};

	api.luminanceToAlpha = function (color) {
		return api.matrix(color, [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0.2125, 0.7154, 0.0721, 0, 0
		]);
	};

	// create functions for the default presets
	var createPreset = function (preset) {
		return function (colorString) {
			return api.transform(colorString, preset);
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
