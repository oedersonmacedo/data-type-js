let regExp = /test@gmail.com/;
let result = regExp.test("test@gmail.com");
console.log(result);
// expect output: true

result = regExp.exec("test@gmail.com");
console.log(result);
// expect output: [ 'test@gmail.com', index: 0, input: 'test@gmail.com', groups: undefined ]

result = regExp.exec("E-mail: test@gmail.com");
console.log(result[0]);
// expect output: 'test@gmail.com'

console.log(result.index);
// expect output: 8

console.log(result.input);
// expect output: 'E-mail: test@gmail.com'

result = regExp.exec("E-Mail: test@gmailxcom");

console.log(result[0]);
// expect output: 'E-mail: test@gmail.com'

console.log(result.index);
// expect output: 8

console.log(result.input);
// expect output: 'E-Mail: test@gmailxcom'

regExp = /test@gmail\.com/;
console.log(regExp.exec("E-Mail: test@gmailxcom"));
// expect output: null
