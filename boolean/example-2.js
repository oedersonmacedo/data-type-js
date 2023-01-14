let condition = true;
let phrase = (condition) ? "The condition is TRUE" : "The condition is FALSE";
console.log(phrase);
// expect output: 'The condition is TRUE'

condition = false;
phrase = (condition) ? "The condition is TRUE" : "The condition is FALSE";
console.log(phrase);
// expect output: 'The condition is FALSE'

condition = new Boolean(true);
phrase = (condition) ? "The condition is TRUE" : "The condition is FALSE";
console.log(phrase);
// expect output: 'The condition is TRUE'


condition = new Boolean(false);
phrase = (condition) ? "The condition is TRUE" : "The condition is FALSE";
console.log(phrase);
// expect output: 'The condition is TRUE'