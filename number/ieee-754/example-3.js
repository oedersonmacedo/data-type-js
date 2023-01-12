console.log(10 * "JavaScript");
// expect output: NaN

console.log(0/0);
// expect output: NaN

console.log(Math.sqrt(-9));
// expect output: NaN

console.log(Math.log(-1));
// expect output: NaN

console.log(parseFloat("JavaScript"));
// expect output: NaN

console.log(NaN === NaN);
// expect output: false
// The IEEE 754 spec for floating-point numbers 
// (which is used by all languages for floating-point) says that NaNs are never equal.

console.log((isNaN(NaN) && isNaN(NaN)===isNaN(NaN)));
// expect output: true