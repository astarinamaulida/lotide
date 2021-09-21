const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});

// TEST CODE
//assertEqual(tail([1, 2, 3]), [2, 3]);
//assertEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);

// Test Case: Check the original array
//const words = ["Hey"];
//console.log(tail(words)); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 1); // original array should still have 1 element!