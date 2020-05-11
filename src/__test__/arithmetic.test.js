const arithmetic = require('../lib/arithmetic');

test('adds 1 + 2 to equal 3', () => {
  expect(arithmetic.add(1, 2)).toBe(3);
});

test('If no numbers passed, return null', () => {
  expect(arithmetic.add()).toBeNull();
});

test('If type of parameter passed is not a number, return null', () => {
  expect(arithmetic.add('A', 'B')).toBeNull();
})

test('If parameters passed are valid nums, subtract', () => {
  expect(arithmetic.sub(3, 2)).toBe(1);
});

test('If paramets passed are not numbers, return null', () => {
  expect(arithmetic.sub('A', 'B')).toBeNull();
});

test('If no parameter is passed, return null', () => {
  expect(arithmetic.sub()).toBeNull();
});
