// Compare the performance With and Without object
// without Object
let counter = 0;
console.time("performance without Object");
while (counter < 100000) {
    "JavaScript";
    counter++;
}
// Faster
console.timeEnd("performance without Object");


// with Object
counter = 0;
console.time("performance with Object");
while (counter < 100000) {
    new String("JavaScript");
    counter++;
}
// Slower
console.timeEnd("performance with Object");