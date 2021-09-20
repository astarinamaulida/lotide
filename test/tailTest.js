const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Guava", "Guava");
assertEqual(2, 5);

// Test Case: Check the original array
const words = ["Hey"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 1); // original array should still have 1 element!