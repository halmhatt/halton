Halton
======

Generate Halton sequences of low discrepancy numbers


## Usage

Require halton

```js
var halton = require('halton');
```

Simplest example:
```js
var halton = require('halton');

console.log(halton(0, 3)); // 1/3
console.log(halton(1, 3)); // 2/3
```

Example with bound base:
```js
var halton = require('halton');

var base3 = halton.base(3);

console.log(base3(0)); // 1/3
console.log(base3(1)); // 2/3
```