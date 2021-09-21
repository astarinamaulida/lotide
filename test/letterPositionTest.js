const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// TEST CODE
describe("#letterPositions", () => {
  it("returns[0] for h in ['hello']", () => {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });
  it("returns[1], [2] for l in ['hello']", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
});

//console.log(letterPositions("Lighthouse in the house"));

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

//assertArraysEqual(letterPositions("hello").e, [1]);