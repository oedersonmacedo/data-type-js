let regExp = /^test@gmail\.com$/;
console.log(regExp.exec("E-Mail: test@gmail.com"));
// expect output: null

console.log(regExp.exec("test@gmail.com"));
// expect output: [ 'john@gmail.com', index: 0, input: 'john@gmail.com', groups: undefined ]

regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
result = regExp.exec("jaane@hotmail.com");

console.log(result[0]);
// expect output: 'jane@hotmail.com'

console.log(result.index);
// expect output: 0

console.log(result.input);
// expect output: 'jane@hotmail.com'

regExp = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
result = regExp.exec("mary@hotmail.com.br");

console.log(result[0]);
// expect output: 'mary@hotmail.com.br'

console.log(result[1]);
// expect output: '.br'

console.log(result.index);
// expect output: 0

console.log(result.input);
// expect output: 'mary@hotmail.com.br'