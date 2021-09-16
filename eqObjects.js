const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
const eqArrays = function(array1, array2) {
  // To check if the array is an array
  if (array1.isArray && array2.isArray) {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return (array1 === array2);
  }
};
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } return true;
  }
  return false;
};
  
// TEST CODE

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqArrays(eqObjects(cd, dc), true), true);
console.log(eqObjects(cd,dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqArrays(eqObjects(cd, cd2), false), false);
console.log(eqObjects(cd, cd2));
console.log((eqArrays(eqObjects(cd, cd2), false)));
console.log((eqArrays(eqObjects(cd, cd2), true)));
console.log(eqObjects(cd2,dc));
