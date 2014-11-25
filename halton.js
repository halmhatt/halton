
module.exports = function(index, base) {
	result = 0;
	frac = 1 / base;
	i = index + 1;

	while(i > 0) {
		result += frac * (i % base);
		i = Math.floor(i / base);
		frac = frac / base;
	}

	return result;
}

/**
 * Create a function that binds the base
 * @param  {Number} base Base to use for halton sequence
 * @return {Function}      Function whith bound base
 */
module.exports.base = function(base) {
	return function(index) {
		return module.exports(index, base);
	};
};

module.exports.bases = function(baseA, baseB) {
	var bases = Array.prototype.slice.call(arguments);

	return function(index) {

		return bases.map(function(base) {
			return module.exports(index, base);
		});
	};
};

module.exports.increment = function(fn) {
	var index = 0;

	return function() {
		return fn.call(fn, index++);
	};
};

module.exports.generate = function(fn, length) {
	var result = [],
		inc = module.exports.increment(fn),
		index = 0;

	while(length--) {
		result.push(inc());
	}

	return result;
};