// We can't confuse the difference in typeof and instanceof
// The typeof operator returns a string indicating the type of the operand's value
// The instanceof operator tests to see if the prototype property of a 
// constructor appears anywhere in the prototype chain of an object.

console.log(typeof function sum(a, b) {return a + b});
// expect output: function

console.log(typeof {name: "Linus Torvalds"});
// expect output: object

console.log(typeof [1,2,3,4,5,6]);
// expect output: object

console.log(typeof /[a-zA-Z]+/);
// expect output: object

console.log(typeof (new Date()));
// expect output: object
