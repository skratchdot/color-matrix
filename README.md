# color-matrix

[![NPM version](https://badge.fury.io/js/color-matrix.svg)](http://badge.fury.io/js/color-matrix)
[![Build Status](https://travis-ci.org/skratchdot/color-matrix.png?branch=master)](https://travis-ci.org/skratchdot/color-matrix)
[![Code Climate](https://codeclimate.com/github/skratchdot/color-matrix.png)](https://codeclimate.com/github/skratchdot/color-matrix)
[![Dependency Status](https://david-dm.org/skratchdot/color-matrix.svg)](https://david-dm.org/skratchdot/color-matrix)
[![devDependency Status](https://david-dm.org/skratchdot/color-matrix/dev-status.svg)](https://david-dm.org/skratchdot/color-matrix#info=devDependencies)

[![NPM](https://nodei.co/npm/color-matrix.png)](https://npmjs.org/package/color-matrix)


## Description

Apply filters to colors to simulate things like color blindness and night vision. This
library tries to simulate the behavior of the svg filter effect 
[feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix).

It comes in 2 formats: [a node.js library](#getting-started) and a
[command line tool](#command-line-tool).


## Node.js Library

### Getting Started

Install the module with: `npm install color-matrix`

```javascript
var ColorMatrix = require('color-matrix').ColorMatrix;
var matrix = new ColorMatrix();
// simulate color-blindness
matrix.transform([222, 0, 173, 255], 'deuteranopia'); // returns [139, 155, 121, 1]
```

***NOTE:*** For a better "color blindness" library, see:
[color-blind](http://github.com/skratchdot/color-blind). This library is just a port
of the old "color matrix" code for use in node.  It does allow you to pass in custom
filters (which is why I published it, instead of throwing it away).


### API Documentation

Read the [API Docs](https://github.com/skratchdot/color-matrix/blob/master/docs/api.md)
by using this link:

- https://github.com/skratchdot/color-matrix/blob/master/docs/api.md


## Command Line Tool


### Installation

The `color-matrix` tool can be installed globally by running:
```bash
npm install -g color-matrix
```

### Usage

```bash
  Usage: color-matrix [options] <inputColor>

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -i, --input <imageFile>    input image file
    -o, --output <imageFile>   output image file
    -f, --filter <filterName>  filter name to use
    -v, --value <value>        value for the selected operation type
    -l, --list                 list all the filter names
```


## See Also

- [MDN: feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix)
- [w3c spec: feColorMatrix](http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement)
- [color-js source code](https://color-js.googlecode.com/svn/trunk/src/Color.matrix.js)
- [Original Color Matrix Library](http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/)
- [StackOverflow: RGB filters for different forms of color blindness](http://stackoverflow.com/questions/87146/rgb-filters-for-different-forms-of-color-blindness)
- [Fun with the colormatrix](http://hirntier.blogspot.com/2008/09/fun-with-colormatrix.html)


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
