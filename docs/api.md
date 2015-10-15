<a name="module_ColorMatrix"></a>
## ColorMatrix
Apply filters to colors to simulate things like color blindness and night vision.
Tries to mimic the behavior of the svg feColorMatrix filter.

For more information about svg feColorMatrix:

- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
- http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement

This library uses modified logic from the following 3 resources:

- https://color-js.googlecode.com/svn/trunk/src/Color.matrix.js
- http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/
- http://stackoverflow.com/questions/87146/rgb-filters-for-different-forms-of-color-blindness

**Author:** skratchdot  
**License**: MIT  
**Copyright**: Copyright (c) 2014 skratchdot.com  
**Example**  
```js
var ColorMatrix = require('color-matrix').ColorMatrix;
var matrix = new ColorMatrix();
matrix.transform([222, 0, 173, 255], 'deuteranopia'); // returns [139, 155, 121, 1]
```

* [ColorMatrix](#module_ColorMatrix)
  * [~addFilter](#module_ColorMatrix..addFilter)
  * [~getFilter](#module_ColorMatrix..getFilter) ⇒ <code>function</code>
  * [~getFilters](#module_ColorMatrix..getFilters) ⇒ <code>object</code>
  * [~transform](#module_ColorMatrix..transform)

<a name="module_ColorMatrix..addFilter"></a>
### ColorMatrix~addFilter
Stores a matrix in the list of available filters

**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the filter |
| filter | <code>function</code> | a function that returns a 20 item array representing a matrix with 4 rows and 5 columns |

**Example**  
```js
colorMatrix.addFilter('myIndentityMatrix', function () {
  return [
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0
  ];
}); // now you can call: colorMatrix.transform('myIndentityMatrix');
```
<a name="module_ColorMatrix..getFilter"></a>
### ColorMatrix~getFilter ⇒ <code>function</code>
Gets the filter with the given name. Returns an identity matrix
when not found.

**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**Returns**: <code>function</code> - A function that returns a 5x4 matrix  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the filter |

**Example**  
```js
var fn = colorMatrix.getFilter('deuteranopia');
var result = fn([255, 0, 0, 255]); // result contains an rgba array
```
<a name="module_ColorMatrix..getFilters"></a>
### ColorMatrix~getFilters ⇒ <code>object</code>
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**Returns**: <code>object</code> - A hash of all the filter functions.  
**Example**  
```js
var filterFunctions = colorMatrix.getFilters();
var result = filterFunctions.cold([255, 0, 0, 255]);
```
<a name="module_ColorMatrix..transform"></a>
### ColorMatrix~transform
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| rgba | <code>array</code> | An RGBA array |
| filter | <code>string</code> | The name of the filter function |
| value | <code>number</code> &#124; <code>array</code> | The value to pass to the filter function |

**Example**  
```js
var result1 = colorMatrix.transform([255, 0, 0, 255], 'invert');
var result2 = colorMatrix.transform([255, 0, 0, 255], 'hueRotate', 180);
```
