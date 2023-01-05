console.log(4 | 3);
// expect output: 7
// binary number 4: '00000000000000000000000000000100'
// binary number 3: '00000000000000000000000000000011'
// genarate binary number: '00000000000000000000000000000111' (7 in decimal)

console.log(3 & 1);
// expect number: 1
// binary number 3: '00000000000000000000000000000011'
// binary number 1: '00000000000000000000000000000001'
// genarate binary number: '00000000000000000000000000000001' (1 in decimal)

console.log(5 ^ 3);
// expect number: 6
// binary number 5: '00000000000000000000000000000101'
// binary number 3: '00000000000000000000000000000011'
// genarate binary number: '00000000000000000000000000000110' (6 in decimal)

console.log(~2);
// expect number: -3
// binary number 3: '00000000000000000000000000000010'
// genarate binary number: '11111111111111111111111111111101' (-3([-3 >>> 0]=4294967293) in decimal)

console.log(4 << 2);
// expect number: 16
// binary number 4: '00000000000000000000000000000100'
// genarate binary number: '00000000000000000000000000010000' (16 in decimal)

console.log(127 >> 1);
// expect number: 64
// binary number 128: '00000000000000000000000010000000'
// genarate binary number: '00000000000000000000000001000000' (64 in decimal)

console.log(-2 >>> 1);
// expect number: 2147483647
// binary number -2 ([-2 >>> 0]=4294967294): '11111111111111111111111111111110'
// genarate binary number: '01111111111111111111111111111111' (2147483647 in decimal)