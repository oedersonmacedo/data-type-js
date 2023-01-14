let regExp = /[a-z]+@[\.a-z]+/g;
let result1 = regExp.exec("mary@hotmail.com;john@gmail.com");
console.log(result1[0]);
// expect output: 'mary@hotmail.com'

console.log(result1.index);
// expect output: 0

let result2 = regExp.exec("mary@hotmail.com;john@gmail.com");
console.log(result2[0]);
// expect output: 'john@gmail.com'

console.log(result2.index);
// expect output: 17
