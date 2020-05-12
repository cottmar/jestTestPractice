import greet from '../lib/greet';

test('Expects null if input is not a string', () => {
  expect(greet(3)).toBeNull();
});

test('Expect an empty string to return null', () => {
  expect(greet('')).toBeNull();
});

test('Should return hello world', () => {
  expect(greet('Cara')).toMatch('Hello world!');
});

test('There is no I in my name', () => {
  expect('Cara').not.toMatch(/I/);
})
 