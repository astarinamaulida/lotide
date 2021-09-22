const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns ['hello', 'world'] when take out our the 'lighthouse' from words", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});

// TEST CODE
/*const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// print the without function to check if it prints the correct result
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/