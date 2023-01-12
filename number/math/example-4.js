const values = [1, 2, 3, 4, 19, 5, 6];

console.log(Math.min(...values));
// expect output: 1

console.log(Math.max(...values));
// expect output: 19

console.log(Math.min(1, 2, 3, 4, 19, 5, 6));
// expect output: 1

console.log(Math.max(1, 2, 3, 4, 19, 5, 6));
// expect output: 19

console.log(Math.random());
// expect output: a number from 0 to < 1

console.log(Math.floor(Math.random() * 3));
// expect output: 0, 1 or 2