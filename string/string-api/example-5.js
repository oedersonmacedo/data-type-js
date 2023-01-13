console.log("C++".match(/\+/g));
// expect output: ['+', '+']

console.log("Java".search(/a/));
// expect output: 1

console.log("JavaScript".replace("Java", "Ecma"));
// expect output: 'EcmaScript'

console.log("JavaScript".replace(/a/g, 4));
// expect output: 'J4v4Script'

console.log("JavaScript".replace(/a/, 4));
// expect output: 'J4vaScript'