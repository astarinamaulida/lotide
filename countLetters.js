// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😵‍💫😵‍💫😵‍💫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to print occurence of character
const countLetters = function(array) {
  let str = array.toLowerCase().split(" ").join("");
  const characters = {};

  for (let i = 0; i < str.length; i++) {
    if (characters[str[i]]) {
      characters[str[i]] += 1;
    } else {
      characters[str[i]] = 1;
    }
  }
  console.log(characters);
  return characters;
};

// TEST CODE
countLetters("Lighthouse Labs");