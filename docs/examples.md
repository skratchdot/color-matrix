# Color Matrix Examples

[normal](#normal)
[protanomaly](#protanomaly)
[deuteranomaly](#deuteranomaly)
[tritanomaly](#tritanomaly)
[protanopia](#protanopia)
[deuteranopia](#deuteranopia)
[tritanopia](#tritanopia)
[achromatopsia](#achromatopsia)
[achromatomaly](#achromatomaly)
[invert](#invert)
[grayscale](#grayscale)
[sepia](#sepia)
[nightvision](#nightvision)
[warm](#warm)
[cool](#cool)
[brightness](#brightness)
[exposure](#exposure)
[contrast](#contrast)
[temperature](#temperature)
[tint](#tint)
[threshold](#threshold)
[matrix](#matrix)
[saturate](#saturate)
[hueRotate](#hueRotate)
[luminanceToAlpha](#luminanceToAlpha)


## normal

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "normal");
// or
matrix.normal([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "normal" "#FF0080" 
# or process an image:
color-matrix --filter "normal" --input ./image.png --output ./image-normal.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="normal" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="normal" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-normal.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-normal"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-normal)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## protanomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "protanomaly");
// or
matrix.protanomaly([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "protanomaly" "#FF0080" 
# or process an image:
color-matrix --filter "protanomaly" --input ./image.png --output ./image-protanomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="protanomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="protanomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-protanomaly.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-protanomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.817 0.183 0 0 0 0.333 0.667 0 0 0 0 0.125 0.875 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-protanomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## deuteranomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "deuteranomaly");
// or
matrix.deuteranomaly([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "deuteranomaly" "#FF0080" 
# or process an image:
color-matrix --filter "deuteranomaly" --input ./image.png --output ./image-deuteranomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="deuteranomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="deuteranomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-deuteranomaly.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-deuteranomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.8 0.2 0 0 0 0.258 0.742 0 0 0 0 0.142 0.858 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-deuteranomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## tritanomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "tritanomaly");
// or
matrix.tritanomaly([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "tritanomaly" "#FF0080" 
# or process an image:
color-matrix --filter "tritanomaly" --input ./image.png --output ./image-tritanomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="tritanomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="tritanomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tritanomaly.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-tritanomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.967 0.033 0 0 0 0 0.733 0.267 0 0 0 0.183 0.817 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tritanomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## protanopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "protanopia");
// or
matrix.protanopia([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "protanopia" "#FF0080" 
# or process an image:
color-matrix --filter "protanopia" --input ./image.png --output ./image-protanopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="protanopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="protanopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-protanopia.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-protanopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-protanopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## deuteranopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "deuteranopia");
// or
matrix.deuteranopia([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "deuteranopia" "#FF0080" 
# or process an image:
color-matrix --filter "deuteranopia" --input ./image.png --output ./image-deuteranopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="deuteranopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="deuteranopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-deuteranopia.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-deuteranopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-deuteranopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## tritanopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "tritanopia");
// or
matrix.tritanopia([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "tritanopia" "#FF0080" 
# or process an image:
color-matrix --filter "tritanopia" --input ./image.png --output ./image-tritanopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="tritanopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="tritanopia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tritanopia.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-tritanopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tritanopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## achromatopsia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "achromatopsia");
// or
matrix.achromatopsia([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "achromatopsia" "#FF0080" 
# or process an image:
color-matrix --filter "achromatopsia" --input ./image.png --output ./image-achromatopsia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="achromatopsia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="achromatopsia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-achromatopsia.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-achromatopsia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-achromatopsia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## achromatomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "achromatomaly");
// or
matrix.achromatomaly([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "achromatomaly" "#FF0080" 
# or process an image:
color-matrix --filter "achromatomaly" --input ./image.png --output ./image-achromatomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="achromatomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="achromatomaly" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-achromatomaly.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-achromatomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.618 0.32 0.062 0 0 0.163 0.775 0.062 0 0 0.163 0.32 0.516 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-achromatomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## invert

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "invert");
// or
matrix.invert([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "invert" "#FF0080" 
# or process an image:
color-matrix --filter "invert" --input ./image.png --output ./image-invert.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="invert" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="invert" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-invert.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-invert"><feColorMatrix in="SourceGraphic" type="matrix" values="-1 0 0 0 255 0 -1 0 0 255 0 0 -1 0 255 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-invert)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## grayscale

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "grayscale");
// or
matrix.grayscale([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "grayscale" "#FF0080" 
# or process an image:
color-matrix --filter "grayscale" --input ./image.png --output ./image-grayscale.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="grayscale" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="grayscale" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-grayscale.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-grayscale"><feColorMatrix in="SourceGraphic" type="matrix" values="0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-grayscale)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## sepia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "sepia");
// or
matrix.sepia([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "sepia" "#FF0080" 
# or process an image:
color-matrix --filter "sepia" --input ./image.png --output ./image-sepia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="sepia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="sepia" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-sepia.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-sepia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.393 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-sepia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## nightvision

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "nightvision");
// or
matrix.nightvision([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "nightvision" "#FF0080" 
# or process an image:
color-matrix --filter "nightvision" --input ./image.png --output ./image-nightvision.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="nightvision" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="nightvision" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-nightvision.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-nightvision"><feColorMatrix in="SourceGraphic" type="matrix" values="0.1 0.4 0 0 0 0.3 1 0.3 0 0 0 0.4 0.1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-nightvision)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## warm

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "warm");
// or
matrix.warm([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "warm" "#FF0080" 
# or process an image:
color-matrix --filter "warm" --input ./image.png --output ./image-warm.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="warm" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="warm" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-warm.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-warm"><feColorMatrix in="SourceGraphic" type="matrix" values="1.06 0 0 0 0 0 1.01 0 0 0 0 0 0.93 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-warm)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## cool

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "cool");
// or
matrix.cool([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "cool" "#FF0080" 
# or process an image:
color-matrix --filter "cool" --input ./image.png --output ./image-cool.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="cool" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="cool" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-cool.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-cool"><feColorMatrix in="SourceGraphic" type="matrix" values="0.99 0 0 0 0 0 0.93 0 0 0 0 0 1.08 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-cool)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## brightness

**with value: -100**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", -100);
// or
matrix.brightness([255, 0, 128, 255], -100);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value -100
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness--100.png --value -100
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: -50**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", -50);
// or
matrix.brightness([255, 0, 128, 255], -50);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value -50
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness--50.png --value -50
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: -25**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", -25);
// or
matrix.brightness([255, 0, 128, 255], -25);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value -25
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness--25.png --value -25
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", 0);
// or
matrix.brightness([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value 0
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 25**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", 25);
// or
matrix.brightness([255, 0, 128, 255], 25);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value 25
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness-25.png --value 25
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 50**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", 50);
// or
matrix.brightness([255, 0, 128, 255], 50);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value 50
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness-50.png --value 50
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 100**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "brightness", 100);
// or
matrix.brightness([255, 0, 128, 255], 100);
```

### CLI Usage:

```bash
color-matrix --filter "brightness" "#FF0080" --value 100
# or process an image:
color-matrix --filter "brightness" --input ./image.png --output ./image-brightness-100.png --value 100
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="brightness" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-brightness.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-brightness"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-brightness)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## exposure

**with value: -0.5**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "exposure", -0.5);
// or
matrix.exposure([255, 0, 128, 255], -0.5);
```

### CLI Usage:

```bash
color-matrix --filter "exposure" "#FF0080" --value -0.5
# or process an image:
color-matrix --filter "exposure" --input ./image.png --output ./image-exposure--0.5.png --value -0.5
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-exposure.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-exposure"><feColorMatrix in="SourceGraphic" type="matrix" values="NaN 0 0 0 0 0 NaN 0 0 0 0 0 NaN 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-exposure)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "exposure", 1);
// or
matrix.exposure([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "exposure" "#FF0080" --value 1
# or process an image:
color-matrix --filter "exposure" --input ./image.png --output ./image-exposure-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-exposure.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-exposure"><feColorMatrix in="SourceGraphic" type="matrix" values="NaN 0 0 0 0 0 NaN 0 0 0 0 0 NaN 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-exposure)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 2**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "exposure", 2);
// or
matrix.exposure([255, 0, 128, 255], 2);
```

### CLI Usage:

```bash
color-matrix --filter "exposure" "#FF0080" --value 2
# or process an image:
color-matrix --filter "exposure" --input ./image.png --output ./image-exposure-2.png --value 2
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-exposure.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-exposure"><feColorMatrix in="SourceGraphic" type="matrix" values="NaN 0 0 0 0 0 NaN 0 0 0 0 0 NaN 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-exposure)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 4**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "exposure", 4);
// or
matrix.exposure([255, 0, 128, 255], 4);
```

### CLI Usage:

```bash
color-matrix --filter "exposure" "#FF0080" --value 4
# or process an image:
color-matrix --filter "exposure" --input ./image.png --output ./image-exposure-4.png --value 4
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="exposure" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-exposure.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-exposure"><feColorMatrix in="SourceGraphic" type="matrix" values="NaN 0 0 0 0 0 NaN 0 0 0 0 0 NaN 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-exposure)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## contrast

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "contrast", 0);
// or
matrix.contrast([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "contrast" "#FF0080" --value 0
# or process an image:
color-matrix --filter "contrast" --input ./image.png --output ./image-contrast-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-contrast.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-contrast"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-contrast)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.5**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "contrast", 0.5);
// or
matrix.contrast([255, 0, 128, 255], 0.5);
```

### CLI Usage:

```bash
color-matrix --filter "contrast" "#FF0080" --value 0.5
# or process an image:
color-matrix --filter "contrast" --input ./image.png --output ./image-contrast-0.5.png --value 0.5
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-contrast.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-contrast"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-contrast)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "contrast", 1);
// or
matrix.contrast([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "contrast" "#FF0080" --value 1
# or process an image:
color-matrix --filter "contrast" --input ./image.png --output ./image-contrast-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="contrast" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-contrast.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-contrast"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-contrast)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## temperature

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "temperature", 0);
// or
matrix.temperature([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "temperature" "#FF0080" --value 0
# or process an image:
color-matrix --filter "temperature" --input ./image.png --output ./image-temperature-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-temperature.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-temperature"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-temperature)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.5**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "temperature", 0.5);
// or
matrix.temperature([255, 0, 128, 255], 0.5);
```

### CLI Usage:

```bash
color-matrix --filter "temperature" "#FF0080" --value 0.5
# or process an image:
color-matrix --filter "temperature" --input ./image.png --output ./image-temperature-0.5.png --value 0.5
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-temperature.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-temperature"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-temperature)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "temperature", 1);
// or
matrix.temperature([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "temperature" "#FF0080" --value 1
# or process an image:
color-matrix --filter "temperature" --input ./image.png --output ./image-temperature-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="temperature" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-temperature.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-temperature"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-temperature)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## tint

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "tint", 0);
// or
matrix.tint([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "tint" "#FF0080" --value 0
# or process an image:
color-matrix --filter "tint" --input ./image.png --output ./image-tint-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tint.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-tint"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tint)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.5**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "tint", 0.5);
// or
matrix.tint([255, 0, 128, 255], 0.5);
```

### CLI Usage:

```bash
color-matrix --filter "tint" "#FF0080" --value 0.5
# or process an image:
color-matrix --filter "tint" --input ./image.png --output ./image-tint-0.5.png --value 0.5
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tint.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-tint"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tint)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "tint", 1);
// or
matrix.tint([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "tint" "#FF0080" --value 1
# or process an image:
color-matrix --filter "tint" --input ./image.png --output ./image-tint-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="tint" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tint.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-tint"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tint)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## threshold

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "threshold", 0);
// or
matrix.threshold([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "threshold" "#FF0080" --value 0
# or process an image:
color-matrix --filter "threshold" --input ./image.png --output ./image-threshold-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-threshold.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-threshold"><feColorMatrix in="SourceGraphic" type="matrix" values="79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-threshold)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "threshold", 1);
// or
matrix.threshold([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "threshold" "#FF0080" --value 1
# or process an image:
color-matrix --filter "threshold" --input ./image.png --output ./image-threshold-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-threshold.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-threshold"><feColorMatrix in="SourceGraphic" type="matrix" values="79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-threshold)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 2**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "threshold", 2);
// or
matrix.threshold([255, 0, 128, 255], 2);
```

### CLI Usage:

```bash
color-matrix --filter "threshold" "#FF0080" --value 2
# or process an image:
color-matrix --filter "threshold" --input ./image.png --output ./image-threshold-2.png --value 2
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="threshold" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-threshold.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-threshold"><feColorMatrix in="SourceGraphic" type="matrix" values="79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 79.0016 156.0064 20.992 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-threshold)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## matrix

**with value: 1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "matrix", 1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0);
// or
matrix.matrix([255, 0, 128, 255], 1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0);
```

### CLI Usage:

```bash
color-matrix --filter "matrix" "#FF0080" --value 1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0
# or process an image:
color-matrix --filter "matrix" --input ./image.png --output ./image-matrix-1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0.png --value 1,0,0,0,0,0,0.2,0,0,0,0,0,0.2,0,0,0,0,0,1,0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="matrix" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="matrix" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-matrix.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-matrix"><feColorMatrix in="SourceGraphic" type="matrix" values="" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-matrix)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## saturate

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "saturate", 0);
// or
matrix.saturate([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "saturate" "#FF0080" --value 0
# or process an image:
color-matrix --filter "saturate" --input ./image.png --output ./image-saturate-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-saturate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-saturate"><feColorMatrix in="SourceGraphic" type="matrix" values="0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-saturate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.3**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "saturate", 0.3);
// or
matrix.saturate([255, 0, 128, 255], 0.3);
```

### CLI Usage:

```bash
color-matrix --filter "saturate" "#FF0080" --value 0.3
# or process an image:
color-matrix --filter "saturate" --input ./image.png --output ./image-saturate-0.3.png --value 0.3
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-saturate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-saturate"><feColorMatrix in="SourceGraphic" type="matrix" values="0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-saturate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.5**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "saturate", 0.5);
// or
matrix.saturate([255, 0, 128, 255], 0.5);
```

### CLI Usage:

```bash
color-matrix --filter "saturate" "#FF0080" --value 0.5
# or process an image:
color-matrix --filter "saturate" --input ./image.png --output ./image-saturate-0.5.png --value 0.5
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-saturate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-saturate"><feColorMatrix in="SourceGraphic" type="matrix" values="0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-saturate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 0.7**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "saturate", 0.7);
// or
matrix.saturate([255, 0, 128, 255], 0.7);
```

### CLI Usage:

```bash
color-matrix --filter "saturate" "#FF0080" --value 0.7
# or process an image:
color-matrix --filter "saturate" --input ./image.png --output ./image-saturate-0.7.png --value 0.7
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-saturate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-saturate"><feColorMatrix in="SourceGraphic" type="matrix" values="0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-saturate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 1**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "saturate", 1);
// or
matrix.saturate([255, 0, 128, 255], 1);
```

### CLI Usage:

```bash
color-matrix --filter "saturate" "#FF0080" --value 1
# or process an image:
color-matrix --filter "saturate" --input ./image.png --output ./image-saturate-1.png --value 1
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="saturate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-saturate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-saturate"><feColorMatrix in="SourceGraphic" type="matrix" values="0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0.213 0.715 0.072 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-saturate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## hueRotate

**with value: 0**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 0);
// or
matrix.hueRotate([255, 0, 128, 255], 0);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 0
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-0.png --value 0
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 45**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 45);
// or
matrix.hueRotate([255, 0, 128, 255], 45);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 45
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-45.png --value 45
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 90**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 90);
// or
matrix.hueRotate([255, 0, 128, 255], 90);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 90
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-90.png --value 90
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 135**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 135);
// or
matrix.hueRotate([255, 0, 128, 255], 135);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 135
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-135.png --value 135
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 180**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 180);
// or
matrix.hueRotate([255, 0, 128, 255], 180);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 180
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-180.png --value 180
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 225**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 225);
// or
matrix.hueRotate([255, 0, 128, 255], 225);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 225
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-225.png --value 225
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 270**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 270);
// or
matrix.hueRotate([255, 0, 128, 255], 270);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 270
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-270.png --value 270
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |

**with value: 315**

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "hueRotate", 315);
// or
matrix.hueRotate([255, 0, 128, 255], 315);
```

### CLI Usage:

```bash
color-matrix --filter "hueRotate" "#FF0080" --value 315
# or process an image:
color-matrix --filter "hueRotate" --input ./image.png --output ./image-hueRotate-315.png --value 315
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="hueRotate" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-hueRotate.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-hueRotate"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-hueRotate)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## luminanceToAlpha

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform([255, 0, 128, 255], "luminanceToAlpha");
// or
matrix.luminanceToAlpha([255, 0, 128, 255]);
```

### CLI Usage:

```bash
color-matrix --filter "luminanceToAlpha" "#FF0080" 
# or process an image:
color-matrix --filter "luminanceToAlpha" --input ./image.png --output ./image-luminanceToAlpha.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| <img width="256" height="256" alt="luminanceToAlpha" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /> | <img width="256" height="256" alt="luminanceToAlpha" src="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-luminanceToAlpha.png" /> | <svg width="256" height="256" viewBox="0 0 512 512"><filter id="fx-luminanceToAlpha"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2125 0.7154 0.0721 0 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-luminanceToAlpha)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |