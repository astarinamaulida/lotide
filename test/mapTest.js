const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["banana", "apple", "mango", "grape", "strawberry"];
const results1 = map(words, word => word[0]);
const upLetterCase = map(words, word => word.toUpperCase());
const length = map(words, word => word.length);

// Write test cases using at least three different ways of using map.
console.log(assertArraysEqual(results1, [ 'b', 'a', 'm', 'g', 's' ]));
console.log(assertArraysEqual(upLetterCase, [ "BANANA,APPLE,MANGO,GRAPE,MELON" ]));
console.log(assertArraysEqual(length, [ 6,5,5,5,10 ]));