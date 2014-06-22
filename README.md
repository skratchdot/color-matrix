# color-matrix

[![NPM version](https://badge.fury.io/js/color-matrix.svg)](http://badge.fury.io/js/color-matrix)
[![Build Status](https://travis-ci.org/skratchdot/color-matrix.png?branch=master)](https://travis-ci.org/skratchdot/color-matrix)
[![Code Climate](https://codeclimate.com/github/skratchdot/color-matrix.png)](https://codeclimate.com/github/skratchdot/color-matrix)
[![Coverage Status](https://coveralls.io/repos/skratchdot/color-matrix/badge.png)](https://coveralls.io/r/skratchdot/color-matrix)
[![Dependency Status](https://david-dm.org/skratchdot/color-matrix.svg)](https://david-dm.org/skratchdot/color-matrix)
[![devDependency Status](https://david-dm.org/skratchdot/color-matrix/dev-status.svg)](https://david-dm.org/skratchdot/color-matrix#info=devDependencies)

[![NPM](https://nodei.co/npm/color-matrix.png)](https://npmjs.org/package/color-matrix)


## Description

Apply filters to colors to simulate things like color blindness and night vision. This
library tries to simulate the behavior of the svg filter effect 
[feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix).


## Getting Started

Install the module with: `npm install color-matrix`

```javascript
var ColorMatrix = require('color-matrix').ColorMatrix;
var matrix = new ColorMatrix();
// simulate color-blindness
matrix.transform('#de00ad', 'Deuteranopia'); // returns '#cccccc'
```

***NOTE:*** For a better "color blindness" library, see:
[color-blind](http://github.com/skratchdot/color-blind). This library is just a port
of the old "color matrix" code for use in node.  It does allow you to pass in custom
filters (which is why I published it, instead of throwing it away).


## Documentation




## Examples

_(Coming soon)_

see also? http://hirntier.blogspot.com/2008/09/fun-with-colormatrix.html

https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix

    For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
    For type="saturate", values is a single real number value (0 to 1).
    For type="hueRotate", values is a single one real number value (degrees).
    For type="luminanceToAlpha", values is not applicable.

If the attribute is not specified, then the default behavior depends on the value of attribute type.

    If type="matrix", then this attribute defaults to the identity matrix.
    If type="saturate", then this attribute defaults to the value 1, which results in the identity matrix.
    If type="hueRotate", then this attribute defaults to the value 0, which results in the identity matrix.


## Links

- [MDN: feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix)


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
