// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🎉🎉🎉 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  return source.filter(item => itemsToRemove.indexOf(item) === -1);
};

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// print the without function to check if it prints the correct result
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);