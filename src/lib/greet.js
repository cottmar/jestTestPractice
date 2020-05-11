function greet(name) {
  if (!name || typeof name !== 'string') {
    return null;
  }
  return 'Hello world!';
}

console.log(greet('Cara'));
console.log(greet(''));
console.log(greet());

module.exports = greet;