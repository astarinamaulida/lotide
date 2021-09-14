// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

let eqArrays = function(array1, array2){
    for(let i = 0; i < array2.length; i++){
        if (array1[i] !== array2[i]){
            return false;
        } 
    }
    return true;
};


  // TEST CODE
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays(["Hey"], ["Hey"]), true);
assertEqual(eqArrays(["Hey"], ["Hey"]), false);