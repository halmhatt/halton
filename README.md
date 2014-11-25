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

## API
<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<div class="description"><p>Main function, creates a number for index with base
between [0, 1]</p></div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js">halton.js</a>
<span>, </span>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js#L15">lineno 15</a>
</li>
</ul></dd>
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="base"><span class="type-signature">&lt;static> </span>base<span class="signature">(base)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create a function that binds the base/bases</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>base</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;repeatable><br>
</td>
<td class="description last"><p>Bases to use for halton sequence</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js">halton.js</a>
<span>, </span>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js#L36">lineno 36</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Function whith bound bases</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="generate"><span class="type-signature">&lt;static> </span>generate<span class="signature">(fn, length)</span><span class="type-signature"> &rarr; {Number[]}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generate a sequence of numbers</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fn</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>The function to use for generating sequences</p></td>
</tr>
<tr>
<td class="name"><code>length</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="description last"><p>Length of sequence</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js">halton.js</a>
<span>, </span>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js#L77">lineno 77</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Sequence of numbers</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Number[]</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="increment"><span class="type-signature">&lt;static> </span>increment<span class="signature">(fn, <span class="optional">startIndex</span>)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Wrapper that returns an halton sequence that
increments for each call</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th>Default</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fn</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="attributes">
</td>
<td class="default">
</td>
<td class="description last"><p>Function that will be incremented</p></td>
</tr>
<tr>
<td class="name"><code>startIndex</code></td>
<td class="type">
<span class="param-type">Number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="default">
0
</td>
<td class="description last"><p>Start Index</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js">halton.js</a>
<span>, </span>
<a href="https://github.com/halmhatt/halton/blob/master/halton.js#L61">lineno 61</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Function that increments index for each call</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->