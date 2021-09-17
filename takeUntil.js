/* Implementing a function that will take in two parameters as well:
The array to work with
The callback (which Lodash calls "predicate")*/

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉🎉🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

//The function will return a "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
      return array;
    }
  }
};
  
const pets = ["rabbit", "chicken", "bird", "dog", "fish"];
const results1 = takeUntil(pets, x => x === "dog");
console.log(assertArraysEqual(results1, ["rabbit", "chicken"]));