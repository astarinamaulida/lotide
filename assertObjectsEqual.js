// FUNCTION IMPLEMENTATION
// Create function that will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//assertObjectsEqual(eqObjects(cd,dc),false);
//assertObjectsEqual(eqObjects(cd,dc),true);

module.exports = assertObjectsEqual;
