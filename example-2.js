// These types undergo boxing, and methods can be called to modify them.
console.log((10).toFixed(2));
// expect output: '10.00'

console.log(('JavaScript').replace('a', '4'));
// expect output: 'J4vaScript'

console.log((true).toString());
// expect output: 'true'

console.log((Symbol("iterator")).toString());
// expect output: 'Symbol(iterator)'