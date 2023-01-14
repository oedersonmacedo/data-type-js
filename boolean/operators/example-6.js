function generateSerial (max) {
    max = max || 1000;
    return Math.floor(Math.random() * max);
}

console.log(generateSerial(10));
// expect output: a number from 0 to < 10

console.log(generateSerial(100));
// expect output: a number from 0 to < 100

console.log(generateSerial(1000));
// expect output: a number from 0 to < 1000

console.log(generateSerial());
// expect output: a number from 0 to < 1000