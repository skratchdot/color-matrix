'use strict';

var ColorMatrix = require('../lib/color-matrix.js').ColorMatrix;
var matrix;

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports['color-matrix'] = {
	setUp: function (done) {
		// setup here
		matrix = new ColorMatrix();
		done();
	},
	'normal test': function (test) {
		var values = [
  			[255, 0, 0, 255],
			[255, 0, 0, 0],
			[22, 33, 44, 55],
			[255, 255, 255, 255],
			[0, 0, 0, 0],
			[128, 128, 0, 128]
		];
		test.expect(values.length);
		values.forEach(function (rgba) {
			test.equal(
				matrix.normal(rgba).toString(),
				rgba.toString()
			);
		});
		test.done();
	},
	'invert test': function (test) {
		test.expect(2);
		var expected = [29, 118, 130, 255].toString();
		test.equal(
			matrix.transform([226, 137, 125, 255], 'invert').toString(),
			expected
		);
		test.equal(
			matrix.invert([226, 137, 125, 255]).toString(),
			expected
		);
		test.done();
	},
	'saturate test': function (test) {
		test.expect(4);
		test.equal(
			matrix.saturate([255, 0, 0, 255], 0.5).toString(),
			matrix.transform([255, 0, 0, 255], 'saturate', 0.5).toString()
		);
		// not sure if valid
		test.equal(
			matrix.saturate([255, 0, 0, 255], 0).toString(),
			[54, 54, 54, 255].toString()
		);
		test.equal(
			matrix.saturate([255, 0, 0, 255], 1).toString(),
			[255, 0, 0, 255].toString()
		);
		// not sure if valid
		test.equal(
			matrix.saturate([255, 0, 0, 255], 0.5).toString(),
			[155, 27, 27, 255].toString()
		);
		test.done();
	},
	'hueRotate test': function (test) {
		test.expect(1);
		// not sure if 111 or 161
		test.equal(
			matrix.hueRotate([255, 0, 0, 255], 90).toString(),
			[0, 111, 0, 255].toString()
		);
		test.done();
	},
	'no args throws': function (test) {
		test.expect(3);
		test.throws(function () {
			matrix.transform();
		});
		test.throws(function () {
			matrix.invert();
		});
		test.throws(function () {
			matrix.hueRotate();
		});
		test.done();
	},
};
