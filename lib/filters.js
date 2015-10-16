/**
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
		'normal': function () {
			return [
				1, 0, 0, 0, 0,
				0, 1, 0, 0, 0,
				0, 0, 1, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		/**
		 * @name matrix
		 * @param {array|string} values A list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
		 */
		'matrix': function (v) {
			return v;
		},
		/**
		 * @name saturate
		 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
		 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-saturate.c
		 * @param {number} value a single real number value (0 to 1)
		 */
		'saturate': function (v) {
			v = v || 0;
			return [
				0.213 + 0.787 * v, 0.715 - 0.715 * v, 0.072 - 0.072 * v, 0, 0,
				0.213 - 0.213 * v, 0.715 + 0.285 * v, 0.072 - 0.072 * v, 0, 0,
				0.213 - 0.213 * v, 0.715 - 0.715 * v, 0.072 + 0.928 * v, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		/**
		 * @name hueRotate
		 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
		 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-huerotate.c
		 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values
		 * @param {number} value a single real number value (in degrees)
		 */
		'hueRotate': function (v) {
			v = v || 0;
			var a00 = (0.213) + (Math.cos(v) * 0.787) - (Math.sin(v) * 0.213);
			var a01 = (0.715) - (Math.cos(v) * 0.715) - (Math.sin(v) * 0.715);
			var a02 = (0.072) - (Math.cos(v) * 0.072) + (Math.sin(v) * 0.928);
			var a10 = (0.213) - (Math.cos(v) * 0.213) + (Math.sin(v) * 0.143);
			var a11 = (0.715) + (Math.cos(v) * 0.285) + (Math.sin(v) * 0.140);
			var a12 = (0.072) - (Math.cos(v) * 0.072) - (Math.sin(v) * 0.283);
			var a20 = (0.213) - (Math.cos(v) * 0.213) - (Math.sin(v) * 0.787);
			var a21 = (0.715) - (Math.cos(v) * 0.715) + (Math.sin(v) * 0.715);
			var a22 = (0.072) + (Math.cos(v) * 0.928) + (Math.sin(v) * 0.072);
			return [
				a00, a01, a02, 0, 0,
				a10, a11, a12, 0, 0,
				a20, a21, a22, 0, 0,
				0, 0, 0, 1, 0,
			];
		},
		/**
		 * @name luminanceToAlpha
		 * @see http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
		 * @see https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-luminancetoalpha.c
		 */
		'luminanceToAlpha': function () {
			return [
				0, 0, 0, 0, 0,
				0, 0, 0, 0, 0,
				0, 0, 0, 0, 0,
				0.2125, 0.7154, 0.0721, 0, 0
			];
		},
		'invert': function () {
			return [-1, 0, 0, 0, 255,
				0, -1, 0, 0, 255,
				0, 0, -1, 0, 255,
				0, 0, 0, 1, 0
			];
		},
		'grayscale': function () {
			return [
				0.299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'sepia': function () {
			return [
				0.393, 0.769, 0.189, 0, 0,
				0.349, 0.686, 0.168, 0, 0,
				0.272, 0.534, 0.131, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'nightvision': function () {
			return [
				0.1, 0.4, 0, 0, 0,
				0.3, 1, 0.3, 0, 0,
				0, 0.4, 0.1, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'warm': function () {
			return [
				1.06, 0, 0, 0, 0,
				0, 1.01, 0, 0, 0,
				0, 0, 0.93, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'cool': function () {
			return [
				0.99, 0, 0, 0, 0,
				0, 0.93, 0, 0, 0,
				0, 0, 1.08, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'brightness': function (v) {
			// -100 is black, 0 is normal, 100 is white
			v = 255 * ((v || 0) / 100);
			return [
				1, 0, 0, 0, v,
				0, 1, 0, 0, v,
				0, 0, 1, 0, v,
				0, 0, 0, 1, 0
			];
		},
		'exposure': function (v) {
			// .5 is half, 1 is normal, 2 is double, etc.
			v = Math.max(v, 0);
			return [
				v, 0, 0, 0, 0,
				0, v, 0, 0, 0,
				0, 0, v, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'contrast': function (v) {
			v = v !== undefined ? v : 1;
			var n = 0.5 * (1 - v);
			return [
				v, 0, 0, 0, n,
				0, v, 0, 0, n,
				0, 0, v, 0, n,
				0, 0, 0, 1, 0
			];
		},
		'temperature': function (v) {
			v = v || 0;
			return [
				1 + v, 0, 0, 0, 0,
				0, 1, 0, 0, 0,
				0, 0, 1 - v, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'tint': function (v) {
			v = v || 0;
			return [
				1 + v, 0, 0, 0, 0,
				0, 1, 0, 0, 0,
				0, 0, 1 + v, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'threshold': function (v) {
			v = v || 0;
			var r_lum = 0.3086; // 0.212671
			var g_lum = 0.6094; // 0.715160
			var b_lum = 0.0820; // 0.072169
			var r = r_lum * 256;
			var g = g_lum * 256;
			var b = b_lum * 256;
			return [
				r, g, b, 0, -255 * v,
				r, g, b, 0, -255 * v,
				r, g, b, 0, -255 * v,
				0, 0, 0, 1, 0
			];
		},
		'protanomaly': function () {
			return [
				0.817, 0.183, 0, 0, 0,
				0.333, 0.667, 0, 0, 0,
				0, 0.125, 0.875, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'deuteranomaly': function () {
			return [
				0.8, 0.2, 0, 0, 0,
				0.258, 0.742, 0, 0, 0,
				0, 0.142, 0.858, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'tritanomaly': function () {
			return [
				0.967, 0.033, 0, 0, 0,
				0, 0.733, 0.267, 0, 0,
				0, 0.183, 0.817, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'protanopia': function () {
			return [
				0.567, 0.433, 0, 0, 0,
				0.558, 0.442, 0, 0, 0,
				0, 0.242, 0.758, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'deuteranopia': function () {
			return [
				0.625, 0.375, 0, 0, 0,
				0.7, 0.3, 0, 0, 0,
				0, 0.3, 0.7, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'tritanopia': function () {
			return [
				0.95, 0.05, 0, 0, 0,
				0, 0.433, 0.567, 0, 0,
				0, 0.475, 0.525, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'achromatopsia': function () {
			return [
				0.299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0.299, 0.587, 0.114, 0, 0,
				0, 0, 0, 1, 0
			];
		},
		'achromatomaly': function () {
			return [
				0.618, 0.320, 0.062, 0, 0,
				0.163, 0.775, 0.062, 0, 0,
				0.163, 0.320, 0.516, 0, 0,
				0, 0, 0, 1, 0
			];
		}
	};
};