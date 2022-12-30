// The return when use new Number, works boxing with the value of the object
console.log(new Number(10));
// expect output (decimal): [Number: 10]

console.log(new Number(9.9));
// expect output (decimal): [Number: 9.9]

console.log(new Number(0xFF));
// expect output (hexadecimal): [Number: 10]

console.log(new Number(0b10));
// expect output (binary): [Number: 2]

console.log(new Number(0o10));
// expect output (octal): [Number: 8]
