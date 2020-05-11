test('Arithmetic with no imported module', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  console.log(data);
  expect(data).toEqual({one: 1, two: 2});
});

test('additional object assignment', () => {
  const dogs = {one: 'Billie Jean'};
  dogs['two'] = 'Bird Dog';
  console.log(dogs);
  expect(dogs).toEqual({ one: 'Billie Jean', two: 'Bird Dog'});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
