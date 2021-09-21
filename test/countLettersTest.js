const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe("#countLetters", () => {
  it("returns {h: 1, e: 1, l: 2, 0: 1} for 'hello'", () => {
    assert.deepEqual(countLetters('hello me'), {h: 1, e: 2, l: 2, o: 1, m: 1});
  });
});

//countLetters("Lighthouse Labs");

/* output:
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/