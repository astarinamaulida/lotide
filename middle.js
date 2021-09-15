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

const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    //For arrays with one or two elements, there is no middle. Return an empty array.
    if (array.length <= 2) {
      return [];
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
    } else if (array.length % 3 === 0) {
      const middle = array[Math.floor(array.length / 2)];
      return middle;
    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    } else if (array.length % 2 === 0) {
      const midPoint = array.length / 2;
      const middle2 = [array[midPoint - 1], array[midPoint]];
      return middle2;
    }
  }
};

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2, 3]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1]);