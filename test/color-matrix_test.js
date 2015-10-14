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
	'toMatrix()': function (test) {
		test.expect(1);
		test.equal((matrix.toMatrix(' 2   5   sdfdfd  1')).toArray().toString(), [
   			2,5,1,0,0,
   			0,1,0,0,0,
   			0,0,1,0,0,
   			0,0,0,1,0,
   			0,0,0,0,1
   		].toString());
		test.done();
	},
	'toMatrixRGBA()': function (test) {
		var color = [29, 118, 130, 1];
		test.expect(1);
		test.equal(
			matrix.toMatrixRGBA(color).toString(),
			matrix.toMatrixRGBA('rgba(' + color.join(',') + ')').toString()
		);
		test.done();
	},
	'invert test': function (test) {
		var expected = [29, 118, 130, 1].toString();
		test.expect(2);
		test.equal(
			matrix.transform('rgba(226,137,125,1)', 'invert').toString(),
			expected
		);
		test.equal(
			matrix.transform([226, 137 , 125 , 1], 'invert').toString(),
			expected
		);
		test.done();
	},
	'no args': function (test) {
		test.expect(0);
		console.log([
			matrix.transform('#c80000', 'invert'),
			matrix.transform('#000000', 'invert'),
			matrix.transform('#ffffff', 'invert'),
			matrix.transform('#777777', 'invert'),
			matrix.transform('red', 'luminanceToAlpha'),
			matrix.luminanceToAlpha('red'),
			matrix.saturate('red', 0.5),
			matrix.hueRotate('red', 180),
			matrix.hueRotate([255,0,0,1], 180),
			matrix.transform('#de00ad', 'Deuteranopia'),
			matrix.transform('#de00ad', 'deuteranopia')
		].join('\n')
		);
		test.done();
	},
};
