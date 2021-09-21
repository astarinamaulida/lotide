const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const pets = ["rabbit", "chicken", "bird", "dog", "fish"];
  it("returns 'rabbit', 'chicken', 'bird'", () => {
    assert.deepEqual(takeUntil(pets, x => x === "dog"), ["rabbit", "chicken", "bird" ]);
  });
});
