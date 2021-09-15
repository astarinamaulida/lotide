// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`🎉🎉🎉 Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  };

const eqArrays = function(array1, array2){
    for(let i = 0; i < array2.length; i++){
        if (array1[i] !== array2[i]){
            return false;
        } 
    }
    return true;
};


  // TEST CODE
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);