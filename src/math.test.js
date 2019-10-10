const math = require('./math')

test('Adds numbers together with sum()', () => {
	expect(math.sum(2, 3)).toBe(5)
	expect(math.sum(2, 3)).toBeGreaterThan(1)
})