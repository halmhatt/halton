var assert = require('assert'),
	expect = require('chai').expect,
	halton = require('../halton.js');

describe('halton', function() {

	describe('halton(x, 2)', function() {
		it('should generate correct values with base 2', function() {
			var indexes = [0, 1, 2, 3, 4, 5, 6, 7],
				values;

			values = indexes.map(halton.base(2));

			expect(values).to.eql([
				1 / 2, 
				1 / 4,
				3 / 4,
				1 / 8,
				5 / 8,
				3 / 8,
				7 / 8,
				1 / 16
			]);
		});
	});

	describe('halton(x, 3)', function() {
		it('should generate correct values with base 3', function() {
			var indexes = [0, 1, 2, 3, 4, 5, 6 ,7],
				values;

			values = indexes.map(halton.base(3));

			expect(values).to.eql([
				1 / 3,
				2 / 3,
				1 / 9,
				4 / 9,
				6.9999999999999991 / 9,
				2 / 9,
				5 / 9,
				8 / 9
			], 'values should all be equal');
		});
	});

	describe('halton.base()', function() {
		it('should use the base 3 if specified', function() {
			var fn = halton.base(3);
			expect(fn(0)).to.equal(1 / 3);
		});

		it('should use the base 5 if specified', function() {
			var fn = halton.base(5);
			expect(fn(0)).to.equal(1 / 5);
		});
		
		it('should use the base 8 if specified', function() {
			var fn = halton.base(8);
			expect(fn(0)).to.equal(1 / 8);
		});
	});
});