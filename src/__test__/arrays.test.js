const shoppingList = [
  'veggies',
  'bread',
  'chocolate',
  'tea'
];

test('Expect shopping list to contain chocolate', () => {
  expect(shoppingList).toContain('chocolate');
});
