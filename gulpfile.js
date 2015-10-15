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

gulp.task('examples', function () {
	var content = ['# Color Matrix Examples\n'];
	var ColorMatrix = require('./lib/color-matrix.js').ColorMatrix;
	var matrix = new ColorMatrix();
	var filters = matrix.getFilters();
	var filterNames = Object.keys(filters);
	var valueMap = {
		"brightness": [-100, -50, -25, 0, 25, 50, 100],
		"exposure": [-0.5, 1, 2, 4],
		"contrast": [0, 0.5, 1],
		"temperature": [0, 0.5, 1],
		"tint": [0, 0.5, 1],
		"threshold": [0, 1, 2],
		"matrix": [[1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0]],
		"saturate": [0, 0.3, 0.5, 0.7, 1],
		"hueRotate": [0, 45, 90, 135, 180, 225, 270, 315]
	};
	var getImage = function (alt, name) {
		return '<img width="256" height="256"' +
			' alt="' + alt + '"' +
			' src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/' +
			name + '.png" />';
	};
	// build header links
	filterNames.forEach(function (filterName) {
		content.push('[' + filterName + '](#' + filterName + ')');
	});
	filterNames.forEach(function (filterName) {
		content.push('\n\n## ' + filterName);
		var values = valueMap[filterName] || [undefined];
		values.forEach(function (value) {
			var start = Date.now();
			var writeImages = false;
			if (writeImages) {
				console.log('writing: "' + filterName +
						'" with value "' +
						value +
						'" at ' + start);
				child_process.execSync(
						__dirname + '/lib/cli.js -i ' +
						__dirname + '/docs/images/lenna.png -o ' +
						__dirname + '/docs/images/lenna-' + filterName +
						(value !== undefined ? '-' + value : '') +
						'.png -f ' +
						filterName +
						(value !== undefined ? ' -v ' + value + ' ' : '')
					);
				var end = Date.now();
				console.log('finished in ' + (end - start) + 'ms at ' + end);
			}
			if (value !== undefined) {
				content.push('\n**with value: ' + value + '**');
			}
			content.push('\n### Node Usage:\n');
			content.push('```javascript');
			content.push('var ColorMatrix = require("color-matrix");');
			content.push('var matrix = new ColorMatrix();');
			content.push('matrix.transform([255, 0, 128, 255], "' + filterName + '"' +
				(value !== undefined ? ', ' + value : '') +
				');');
			content.push('// or');
			content.push('matrix.' + filterName + '([255, 0, 128, 255]' +
				(value !== undefined ? ', ' + value : '') +
				');');
			content.push('```');
			content.push('\n### CLI Usage:\n');
			content.push('```bash');
			content.push('color-matrix --filter "' + filterName + '" "#FF0080" ' +
				(value !== undefined ? '--value ' + value : '')
			);
			content.push('# or process an image:');
			content.push('color-matrix --filter "' + filterName + '" --input ./image.png --output ./image-' +
				filterName +
				(value !== undefined ? '-' + value + '.png --value ' + value : '.png')
			);
			content.push('```');
			content.push('\n### Example Results\n');
			content.push('| Original | Color Matrix | SVG |');
			content.push('|:--------:|:------------:|:---:|');
			content.push(
				'| ' + getImage(filterName, 'lenna') +
				' | ' + getImage(filterName, 'lenna-' + filterName +
					(value !== undefined ? '-' + value : '')) +
				' | <svg width="256" height="256" viewBox="0 0 512 512">' +
				'<filter id="fx-' + filterName + '">' +
				'<feColorMatrix in="SourceGraphic" type="matrix" values="' +
				(filters[filterName]() || '').toString().split(',').slice(0, 20).join(' ') + '" />' +
				'</filter>' +
				'<image x="0" y="0" width="512" height="512" filter="url(#fx-' + filterName + ')" xlink:href="' +
				'https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" />' +
				'</svg> |'
			);
		});
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
