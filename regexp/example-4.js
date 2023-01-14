let regExp = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result[0]);
// expect output: 'mary@hotmail.com.br'

console.log(result[1]);
// expect output: '.br'

console.log(result.index);
// expect output: 0

console.log(result.input);
// expect output: 'mary@hotmail.com.br'

regExp = /([a-z]+)@([\.a-z]+)/;
result = regExp.exec("mary@hotmail.com");

console.log(result[0]);
// expect output: mary@hotmail.com

console.log(result[1]);
// expect output: mary

console.log(result[2]);
// expect output: hotmail.com

console.log(result.index);
// expect output: 0

console.log(result.input);
// expect output: mary@hotmail.com