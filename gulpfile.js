'use strict';
var child_process = require('child_process');
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');

var jshintTask = function (task, paths) {
	gulp.task(task, function () {
		gulp.src(paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});
};

gulp.task('api-docs', function () {
	var executable = __dirname + '/node_modules/jsdoc-to-markdown/bin/cli.js';
	var filepath = __dirname + '/lib/color-matrix.js';
	var apiDocs = (child_process.execSync(executable + ' ' + filepath)).toString();
	fs.writeFileSync(__dirname + '/docs/api.md', apiDocs, 'utf-8');
});

gulp.task('example-images', function () {
	var ColorMatrix = require('./lib/color-matrix.js').ColorMatrix;
	var matrix = new ColorMatrix();
	Object.keys(matrix.getPresets()).forEach(function (presetName) {
		var start = Date.now();
		console.log('writing: "' + presetName + '" at ' + start);
		var output = child_process.execSync(
			__dirname + '/lib/cli.js -i ' +
			__dirname + '/docs/images/lenna.png -o ' +
			__dirname + '/docs/images/lenna-' + presetName + '.png -p ' +
			presetName
		);
		var end = Date.now();
		console.log('finished in ' + (end - start) + 'ms at ' + end);
	});
});

gulp.task('examples', function () {
	var content = ['# Color Matrix Examples\n'];
	var ColorMatrix = require('./lib/color-matrix.js').ColorMatrix;
	var matrix = new ColorMatrix();
	var presets = matrix.getPresets();
	var presetNames = Object.keys(presets);
	var getImage = function (alt, name) {
		return '![' + alt +
			'](https://github.com/skratchdot/color-matrix/raw/master/docs/images/' +
			name + '.png)';
	};
	// build header links
	presetNames.forEach(function (presetName) {
		content.push('[' + presetName + '](#' + presetName + ')');
	});
	presetNames.forEach(function (presetName) {
		content.push('\n\n## ' + presetName);
		content.push('\n### Node Usage:\n');
		content.push('```javascript');
		content.push('var ColorMatrix = require("color-matrix");');
		content.push('var matrix = new ColorMatrix();');
		content.push('matrix.transform("#FF00FF", "' + presetName + '");');
		content.push('```');
		content.push('\n### CLI Usage:\n');
		content.push('```bash');
		content.push('color-matrix --preset "' + presetName + '" "#FF00FF"');
		content.push('# or process an image:');
		content.push('color-matrix --preset "' + presetName + '" --input ./image.png --output ./image-' + presetName + '.png');
		content.push('```');
		content.push('\n### Example Results\n');
		content.push('| Original | Color Matrix | SVG |');
		content.push('|:--------:|:------------:|:---:|');
		content.push(
			'| ' + getImage(presetName, 'lenna') +
			' | ' + getImage(presetName, 'lenna-' + presetName) +
			' | <svg width="512" height="512" viewBox="0 0 512 512">' +
			'<filter id="fx-' + presetName + '">' +
			'<feColorMatrix in="SourceGraphic" type="matrix" values="' +
			presets[presetName].toArray().toString().split(',').slice(0, 20).join(' ') + '" />' +
			'</filter>' +
			'<image x="0" y="0" width="512" height="512" filter="url(#fx-' + presetName + ')" xlink:href="' +
			'https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" />' +
			'</svg> |'
		);
	});
	fs.writeFileSync('./docs/examples.md', content.join('\n'), 'utf-8');
});

gulp.task('test', function () {
	gulp.src('test/**/*.js')
		.pipe(nodeunit());
});

gulp.task('watch', function () {
	gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint:lib', 'jshint:test', 'test', 'api-docs']);
	gulp.watch(['*.js', '*.json'], ['jshint:root']);
});

// setup tasks
jshintTask('jshint:root', ['*.js', '*.json']);
jshintTask('jshint:lib', 'lib/**/*.js');
jshintTask('jshint:test', 'test/**/*.js');
gulp.task('default', ['jshint:root', 'jshint:lib', 'jshint:test', 'test', 'api-docs', 'watch']);

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
