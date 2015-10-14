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
var ops = ['transform', 'matrix', 'saturate', 'hueRotate', 'luminanceToAlpha'];
var presets;
var results;

var printPresetNames = function () {
	presets = matrix.getPresets();
	console.log('Available preset names:');
	Object.keys(presets).forEach(function (presetName) {
		console.log('  ' + presetName);
	});
};

program
	.version(packageInfo.version)
	.usage('[options] <inputColor>')
	.option('-t, --type <type>', 'operation type <' + ops.join('|') + '>', 'transform')
	.option('-i, --input <imageFile>', 'input image file')
	.option('-o, --output <imageFile>', 'output image file')
	.option('-p, --preset <presetName>', 'preset matrix name')
	.option('-v, --values <values>', 'values for the selected operation type', '')
	.option('-l, --list', 'list preset names')
	.parse(process.argv);

if (program.list) {
	printPresetNames();
	process.exit();
}

if (program.preset) {
	presets = matrix.getPresets();
	if (Object.keys(presets).indexOf(program.preset) === -1) {
		console.error('Invalid preset name "' + program.preset + '".\n');
		printPresetNames();
		process.exit();
	}
}

if (ops.indexOf(program.type) === -1) {
	console.error('Invalid operation type. Valid options are:\n  ' + ops.join('\n  '));
	process.exit();
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
				var res = matrix[program.type]([rgba.r, rgba.g, rgba.b, rgba.a / 255],
					(program.type === 'transform' && program.preset) ? program.preset : program.values);
				rgba.r = res[0];
				rgba.g = res[1];
				rgba.b = res[2];
				rgba.a = Math.round(res[3] * 255);
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
	results = matrix[program.type](program.args[0] || '',
		(program.type === 'transform' && program.preset) ? program.preset : program.values);
	results = 'rgba(' + results.join(', ') + ')';
	console.log('css: ' + results + '\nhex: ' + onecolor(results).hex());
	process.exit();
}
