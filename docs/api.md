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
matrix.transform('#de00ad', 'deuteranopia'); // returns [139, 155, 121, 1]
```

* [ColorMatrix](#module_ColorMatrix)
  * [~addPreset](#module_ColorMatrix..addPreset)
  * [~getPreset](#module_ColorMatrix..getPreset) ⇒ <code>array</code>
  * [~getPresets](#module_ColorMatrix..getPresets) ⇒ <code>object</code>
  * [~toMatrix](#module_ColorMatrix..toMatrix)
  * [~toMatrixRGBA](#module_ColorMatrix..toMatrixRGBA) ⇒ <code>Matrix</code>
  * [~transform](#module_ColorMatrix..transform)
  * [~matrix](#module_ColorMatrix..matrix)
  * [~saturate](#module_ColorMatrix..saturate)
  * [~hueRotate](#module_ColorMatrix..hueRotate)
  * [~luminanceToAlpha](#module_ColorMatrix..luminanceToAlpha)

<a name="module_ColorMatrix..addPreset"></a>
### ColorMatrix~addPreset
Stores a matrix in the list of available presets

**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the preset |
| matrix | <code>array</code> &#124; <code>string</code> | the 5x5 color matrix |

**Example**  
```js
colorMatrix.addPreset('myIndentityMatrix', [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1]
]); // now you can call: colorMatrix.transform('myIndentityMatrix');
```
<a name="module_ColorMatrix..getPreset"></a>
### ColorMatrix~getPreset ⇒ <code>array</code>
Gets the preset with the given name. Returns an identity matrix
when not found.

**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**Returns**: <code>array</code> - The 5x5 matrix if found, a 5x5 identity matrix if not found  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the preset |

**Example**  
```js
colorMatrix.getPreset('deuteranopia'); // returns [
                                       //   [0.625, 0.375, 0, 0, 0],
                                       //   [0.7, 0.3, 0, 0, 0],
                                       //   [0, 0.3, 0.7, 0, 0],
                                       //   [0, 0, 0, 1, 0],
                                       //   [0, 0, 0, 0, 1]
                                       // ];
```
<a name="module_ColorMatrix..getPresets"></a>
### ColorMatrix~getPresets ⇒ <code>object</code>
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**Returns**: <code>object</code> - A hash of all the preset matrices.  
<a name="module_ColorMatrix..toMatrix"></a>
### ColorMatrix~toMatrix
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> &#124; <code>string</code> | Convert a string or partial array to a `new Matrix(5, 5)`; |

**Example**  
```js
colorMatrix.toMatrix('0 5 5'); // returns: new Matrix([
                               //   [0, 5, 5, 0, 0],
                               //   [0, 1, 0, 0, 0],
                               //   [0, 0, 1, 0, 0],
                               //   [0, 0, 0, 1, 0],
                               //   [0, 0, 0, 0, 1],
                               // ]);
```
<a name="module_ColorMatrix..toMatrixRGBA"></a>
### ColorMatrix~toMatrixRGBA ⇒ <code>Matrix</code>
Convert an RGBA array or a CSS color string to a 5x1 matrix

**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**Returns**: <code>Matrix</code> - A 5x1 Matrix  

| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |

**Example**  
```js
colorMatrix.toMatrixRGBA('red'); // returns [[255],[0],[0],[1],[1]]
colorMatrix.toMatrixRGBA([0,255,0,0.7]); // returns [[0],[255],[0],[0.7],[1]]
```
<a name="module_ColorMatrix..transform"></a>
### ColorMatrix~transform
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |
| name | <code>string</code> | the name of a preset, a matrix, or a matrix string |

<a name="module_ColorMatrix..matrix"></a>
### ColorMatrix~matrix
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |
| values | <code>array</code> &#124; <code>string</code> | A list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma. |

<a name="module_ColorMatrix..saturate"></a>
### ColorMatrix~saturate
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**See**

- http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
- https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-saturate.c


| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |
| value | <code>number</code> | a single real number value (0 to 1) |

<a name="module_ColorMatrix..hueRotate"></a>
### ColorMatrix~hueRotate
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**See**

- http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
- https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-huerotate.c
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/values


| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |
| value | <code>number</code> | a single real number value (in degrees) |

<a name="module_ColorMatrix..luminanceToAlpha"></a>
### ColorMatrix~luminanceToAlpha
**Kind**: inner property of <code>[ColorMatrix](#module_ColorMatrix)</code>  
**See**

- http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
- https://github.com/jcupitt/gegl-vips/blob/master/operations/common/svg-luminancetoalpha.c


| Param | Type | Description |
| --- | --- | --- |
| inputColor | <code>array</code> &#124; <code>string</code> | An RGBA array or CSS color string |

