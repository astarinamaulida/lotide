// Copy in our assertArraysEqual function in order to test our map function.

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉🎉🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

/*Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based on the results of the callback function.*/

const words = ["banana", "apple", "mango", "grape", "strawberry"];

//Call map and pass in our words and a simple arrow function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const upLetterCase = map(words, word => word.toUpperCase());
const length = map(words, word => word.length);

// Write test cases using at least three different ways of using map.
console.log(assertArraysEqual(results1, [ 'b', 'a', 'm', 'g', 's' ]));
console.log(assertArraysEqual(upLetterCase, [ "BANANA,APPLE,MANGO,GRAPE,MELON" ]));
console.log(assertArraysEqual(length, [ 6,5,5,5,10 ]));