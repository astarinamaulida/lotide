const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

// TEST CODE
/*describe("#assertObjectsEqual", () => {
  it("returns {h: 1, e: 1, l: 2, 0: 1} for 'hello'", () => {
    assert.deepEqual(assertObjectsEqual(eqObjects(cd,dc),true), undefined);
  });
});*/

assertObjectsEqual(eqObjects(cd,dc), true);
assertObjectsEqual(eqObjects(cd,dc), true);