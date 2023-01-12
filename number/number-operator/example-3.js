/** 
 * If the operator has after the variable, first it will
 * show the value and then the attribute plus one.
 * However, if the operator has before the variable, it will
 * first assign one more, and then show the updated value.
**/
let result = 10;
console.log(result);
// expect output: 10


console.log(result++);
// expect output: 10

console.log(++result);
// expect output: 12

console.log(result--);
// expect output: 12

console.log(--result);
// expect output: 10

let firstValue = 3;
const secondValue = firstValue++;

console.log(`firstValue:${firstValue}, secondValue:${secondValue}`);
// expected output: 'x:4, y:3'

let trheeValue = 3;
const fourValue = ++trheeValue;

console.log(`trheeValue:${trheeValue}, fourValue:${fourValue}`);
// expected output: 'a:4, b:4'