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
	'no args': function (test) {
		test.expect(0);
		console.log('\n',
				matrix.transform('#c80000', 'invert'),
				matrix.transform('#000000', 'invert'),
				matrix.transform('#ffffff', 'invert'),
				matrix.transform('#777777', 'invert'),
				matrix.transform('#de00ad', 'deuteranopia')
		);
		test.done();
	},
};
