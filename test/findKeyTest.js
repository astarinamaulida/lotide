const assert = require('chai').assert;
const findKey = require('../findKey');

// TEST CODE
describe("#findKey", () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns 'noma' for x.stars === 2", () => {
    assert.strictEqual(findKey(test, x => x.stars === 2), 'noma');
  });
  it("returns 'Akaleri' for x.stars === 3", () => {
    assert.strictEqual(findKey(test, x => x.stars === 3), 'Akaleri');
  });
});

/*console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
, "noma"));

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"
, "elBulli"));*/