console.log("JavaScript".slice(0, 4));
// expect output: 'Java'

console.log("JavaScript".slice(4));
// expect output: 'Script'

console.log("JavaScript".slice(0, -6));
// expect output: 'Java'

console.log("JavaScript".slice(-6));
// expect output: 'Script'

console.log("C;Java;JavaScript;Ruby".split(";"));
// expect output: [ 'C', 'Java', 'JavaScript', 'Ruby' ]

console.log("JavaScript".substring(0, 4));
// expect output: 'Java'

console.log("JavaScript".substring(4, 0));
// expect output: 'Java'

console.log("JavaScript".substring(4));
// expect output: 'Script'