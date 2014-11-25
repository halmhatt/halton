
/**
 * Main function, creates a number for index with base
 * between [0, 1]
 * @param  {Number} index Index to return number for, > 0
 * @param  {Number} base  The base to use
 * @return {Number}       The halton number for the index
 */
module.exports = function(index, base) {
	'use strict';

	var result = 0,
		frac = 1 / base,
		i = index + 1;

	while(i > 0) {
		result += frac * (i % base);
		i = Math.floor(i / base);
		frac = frac / base;
	}

	return result;
};

/**
 * Create a function that binds the base/bases
 * @param  {...Number} base Bases to use for halton sequence
 * @return {Function}      Function whith bound bases
 */
module.exports.base = function(base) {
	'use strict';

	var bases = Array.prototype.slice.call(arguments);

	if(bases.length === 1) {
		return function(index) {
			return module.exports(index, bases[0]);
		};
	} else {
		return function(index) {
			return bases.map(function(base) {
				return module.exports(index, base);
			});
		};
	}
};

/**
 * Wrapper that returns an halton sequence that
 * increments for each call
 * @param  {Function} fn           Function that will be incremented
 * @param  {Number} [startIndex=0] Start Index
 * @return {Function}              Function that increments index for each call
 */
module.exports.increment = function(fn, startIndex) {
	'use strict';

	var index = startIndex || 0;

	return function() {
		return fn.call(fn, index++);
	};
};

/**
 * [generate description]
 * @param  {Function} fn     [description]
 * @param  {[type]}   length [description]
 * @return {[type]}          [description]
 */
module.exports.generate = function(fn, length) {
	'use strict';

	var result = [],
		inc = module.exports.increment(fn),
		index = 0;

	while(length--) {
		result.push(inc());
	}

	return result;
};
