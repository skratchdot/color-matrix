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
[luminanceToAlpha](#luminanceToAlpha)


## normal

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "normal");
```

### CLI Usage:

```bash
color-matrix --preset "normal" "#FF00FF"
# or process an image:
color-matrix --preset "normal" --input ./image.png --output ./image-normal.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![normal](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![normal](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-normal.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-normal"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-normal)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## protanomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "protanomaly");
```

### CLI Usage:

```bash
color-matrix --preset "protanomaly" "#FF00FF"
# or process an image:
color-matrix --preset "protanomaly" --input ./image.png --output ./image-protanomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![protanomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![protanomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-protanomaly.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-protanomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.817 0.183 0 0 0 0.333 0.667 0 0 0 0 0.125 0.875 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-protanomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## deuteranomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "deuteranomaly");
```

### CLI Usage:

```bash
color-matrix --preset "deuteranomaly" "#FF00FF"
# or process an image:
color-matrix --preset "deuteranomaly" --input ./image.png --output ./image-deuteranomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![deuteranomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![deuteranomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-deuteranomaly.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-deuteranomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.8 0.2 0 0 0 0.258 0.742 0 0 0 0 0.142 0.858 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-deuteranomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## tritanomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "tritanomaly");
```

### CLI Usage:

```bash
color-matrix --preset "tritanomaly" "#FF00FF"
# or process an image:
color-matrix --preset "tritanomaly" --input ./image.png --output ./image-tritanomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![tritanomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![tritanomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tritanomaly.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-tritanomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.967 0.033 0 0 0 0 0.733 0.267 0 0 0 0.183 0.817 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tritanomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## protanopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "protanopia");
```

### CLI Usage:

```bash
color-matrix --preset "protanopia" "#FF00FF"
# or process an image:
color-matrix --preset "protanopia" --input ./image.png --output ./image-protanopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![protanopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![protanopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-protanopia.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-protanopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.567 0.433 0 0 0 0.558 0.442 0 0 0 0 0.242 0.758 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-protanopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## deuteranopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "deuteranopia");
```

### CLI Usage:

```bash
color-matrix --preset "deuteranopia" "#FF00FF"
# or process an image:
color-matrix --preset "deuteranopia" --input ./image.png --output ./image-deuteranopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![deuteranopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![deuteranopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-deuteranopia.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-deuteranopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-deuteranopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## tritanopia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "tritanopia");
```

### CLI Usage:

```bash
color-matrix --preset "tritanopia" "#FF00FF"
# or process an image:
color-matrix --preset "tritanopia" --input ./image.png --output ./image-tritanopia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![tritanopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![tritanopia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-tritanopia.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-tritanopia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.95 0.05 0 0 0 0 0.433 0.567 0 0 0 0.475 0.525 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-tritanopia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## achromatopsia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "achromatopsia");
```

### CLI Usage:

```bash
color-matrix --preset "achromatopsia" "#FF00FF"
# or process an image:
color-matrix --preset "achromatopsia" --input ./image.png --output ./image-achromatopsia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![achromatopsia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![achromatopsia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-achromatopsia.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-achromatopsia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-achromatopsia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## achromatomaly

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "achromatomaly");
```

### CLI Usage:

```bash
color-matrix --preset "achromatomaly" "#FF00FF"
# or process an image:
color-matrix --preset "achromatomaly" --input ./image.png --output ./image-achromatomaly.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![achromatomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![achromatomaly](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-achromatomaly.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-achromatomaly"><feColorMatrix in="SourceGraphic" type="matrix" values="0.618 0.32 0.062 0 0 0.163 0.775 0.062 0 0 0.163 0.32 0.516 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-achromatomaly)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## invert

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "invert");
```

### CLI Usage:

```bash
color-matrix --preset "invert" "#FF00FF"
# or process an image:
color-matrix --preset "invert" --input ./image.png --output ./image-invert.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![invert](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![invert](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-invert.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-invert"><feColorMatrix in="SourceGraphic" type="matrix" values="-1 0 0 0 255 0 -1 0 0 255 0 0 -1 0 255 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-invert)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## grayscale

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "grayscale");
```

### CLI Usage:

```bash
color-matrix --preset "grayscale" "#FF00FF"
# or process an image:
color-matrix --preset "grayscale" --input ./image.png --output ./image-grayscale.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![grayscale](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![grayscale](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-grayscale.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-grayscale"><feColorMatrix in="SourceGraphic" type="matrix" values="0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0.299 0.587 0.114 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-grayscale)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## sepia

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "sepia");
```

### CLI Usage:

```bash
color-matrix --preset "sepia" "#FF00FF"
# or process an image:
color-matrix --preset "sepia" --input ./image.png --output ./image-sepia.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![sepia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![sepia](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-sepia.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-sepia"><feColorMatrix in="SourceGraphic" type="matrix" values="0.393 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-sepia)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## nightvision

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "nightvision");
```

### CLI Usage:

```bash
color-matrix --preset "nightvision" "#FF00FF"
# or process an image:
color-matrix --preset "nightvision" --input ./image.png --output ./image-nightvision.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![nightvision](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![nightvision](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-nightvision.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-nightvision"><feColorMatrix in="SourceGraphic" type="matrix" values="0.1 0.4 0 0 0 0.3 1 0.3 0 0 0 0.4 0.1 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-nightvision)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## warm

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "warm");
```

### CLI Usage:

```bash
color-matrix --preset "warm" "#FF00FF"
# or process an image:
color-matrix --preset "warm" --input ./image.png --output ./image-warm.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![warm](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![warm](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-warm.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-warm"><feColorMatrix in="SourceGraphic" type="matrix" values="1.06 0 0 0 0 0 1.01 0 0 0 0 0 0.93 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-warm)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## cool

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "cool");
```

### CLI Usage:

```bash
color-matrix --preset "cool" "#FF00FF"
# or process an image:
color-matrix --preset "cool" --input ./image.png --output ./image-cool.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![cool](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![cool](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-cool.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-cool"><feColorMatrix in="SourceGraphic" type="matrix" values="0.99 0 0 0 0 0 0.93 0 0 0 0 0 1.08 0 0 0 0 0 1 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-cool)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |


## luminanceToAlpha

### Node Usage:

```javascript
var ColorMatrix = require("color-matrix");
var matrix = new ColorMatrix();
matrix.transform("#FF00FF", "luminanceToAlpha");
```

### CLI Usage:

```bash
color-matrix --preset "luminanceToAlpha" "#FF00FF"
# or process an image:
color-matrix --preset "luminanceToAlpha" --input ./image.png --output ./image-luminanceToAlpha.png
```

### Example Results

| Original | Color Matrix | SVG |
|:--------:|:------------:|:---:|
| ![luminanceToAlpha](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png) | ![luminanceToAlpha](https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna-luminanceToAlpha.png) | <svg width="512" height="512" viewBox="0 0 512 512"><filter id="fx-luminanceToAlpha"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2125 0.7154 0.0721 0 0" /></filter><image x="0" y="0" width="512" height="512" filter="url(#fx-luminanceToAlpha)" xlink:href="https://github.com/skratchdot/color-matrix/raw/master/docs/images/lenna.png" /></svg> |