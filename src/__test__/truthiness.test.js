// everything with a value is true
// everything without a value is false
// null, undefined, NaN, zero, negatives are false

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).not.toBeTruthy();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).toBeFalsy();
})