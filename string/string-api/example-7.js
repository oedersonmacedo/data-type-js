console.log("Java".concat("Script"));
// expect output: 'JavaScript'

console.log("Data".concat("Flex"));
// expect output: 'DataFlex'

console.log("Script".padStart(10, "Java"));
// expect output: 'JavaScript'

console.log("C".padEnd(3, "+"));
// expect output: 'C++'

console.log("C".concat("+".repeat(2)));
// expect output: 'C++'

console.log(" Self ".trim());
// expect output: 'Self'

console.log(" Scheme ".trimLeft());
// expect output: 'Scheme '

console.log(" Perl ".trimRight());
// expect output: ' Perl'