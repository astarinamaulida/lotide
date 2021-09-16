const eqArrays = function(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};
  

// FUNCTION IMPLEMENTATION
// Create function that will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${inspect(cd)} === ${inspect(dc)}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${inspect(cd)} !== ${inspect(dc)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd,dc),false);
assertObjectsEqual(eqObjects(cd,dc),true);
