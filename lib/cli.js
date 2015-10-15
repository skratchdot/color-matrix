#!/usr/bin/env node
'use strict';
var Caman = require('caman').Caman;
var ColorMatrix = require('./color-matrix.js').ColorMatrix;
var fs = require('fs');
var path = require('path');
var matrix = new ColorMatrix();
var onecolor = require('onecolor');
var program = require('commander');
var packageInfo = require('../package.json');
var filters;

var printFilterNames = function () {
	filters = matrix.getFilters();
	console.log('Available filter names:');
	Object.keys(filters).forEach(function (filterName) {
		console.log('  ' + filterName);
	});
};

program
	.version(packageInfo.version)
	.usage('[options] <inputColor>')
	.option('-i, --input <imageFile>', 'input image file')
	.option('-o, --output <imageFile>', 'output image file')
	.option('-f, --filter <filterName>', 'filter name to use')
	.option('-v, --value <value>', 'value for the selected operation type', '')
	.option('-l, --list', 'list all the filter names')
	.parse(process.argv);

if (program.list) {
	printFilterNames();
	process.exit();
}

if (program.filter) {
	filters = matrix.getFilters();
	if (Object.keys(filters).indexOf(program.filter) === -1) {
		console.error('Invalid filter name "' + program.filter + '".\n');
		printFilterNames();
		process.exit();
	}
}

if (program.value) {
	if (program.filter === 'matrix') {
		program.value = program.value.toString()
			.replace(/[^0-9\.\-\ ]/gi, ' ')
			.replace(/[ ]+/g, ' ')
			.trim()
			.split(' ')
			.map(parseFloat);
	} else {
		program.value = parseFloat(program.value);
	}
}

if (program.input) {
	program.input = path.resolve(program.input);
	if (!fs.existsSync(program.input)) {
		console.error('The input file "' + program.input + '" does not exist.');
		process.exit();
	} else if (typeof program.output !== 'string' || program.output.length <= 0) {
		console.error('Must specify an output file when specifying an input file.');
		process.exit();
	} else {
		program.output = path.resolve(program.output);
		Caman.Filter.register('colorMatrix', function () {
			this.process('colorMatrix', function (rgba) {
				var res = matrix.transform([rgba.r, rgba.g, rgba.b, rgba.a], program.filter, program.value);
				rgba.r = res[0];
				rgba.g = res[1];
				rgba.b = res[2];
				rgba.a = res[3];
				return rgba;
			});
		});
		console.log('writing file: ' + program.output);
		new Caman([program.input, function () {
			this.colorMatrix();
			this.render(function () {
				this.save(program.output);
			});
		}]);
	}
} else {
	var color = onecolor(program.args[0] || '');
	if (!color) {
		color = onecolor('#000000');
	}
	var results = matrix.transform([
		color.red() * 255,
		color.green() * 255,
		color.blue() * 255,
		color.alpha() * 255
	], program.filter, program.value);
	color = color.red(results[0] / 255)
		.green(results[1] / 255)
		.blue(results[2] / 255)
		.alpha(results[3] / 255);
	console.log('hex: ' + color.hex() + '\ncss: ' + color.cssa());
	process.exit();
}
