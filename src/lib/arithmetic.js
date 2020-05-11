const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || !a || !b) {
    return null;
  }
  return a + b;
}

arithmetic.sub = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || !a || !b) {
    return null;
  }
  return a - b;
}



console.log(arithmetic.add('A', 'B'));
console.log(arithmetic.add(1, 2));
console.log(arithmetic.add());

console.log(arithmetic.sub('A', 'B'));
console.log(arithmetic.sub(3, 2));
console.log(arithmetic.sub());

