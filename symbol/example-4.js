let regexp = /JavaScript/;
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp));
// expect output: true