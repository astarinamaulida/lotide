// FUNCTION IMPLEMENTATION
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

const letterPositions = function(sentence) {
  let str = sentence.toLowerCase().split(" ").join("");
  const results = {};

  // logic to update results here
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};
  
// TEST CODE
console.log(letterPositions("Lighthouse in the house"));

/* output:
 {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

assertArraysEqual(letterPositions("hello").e, [1]);