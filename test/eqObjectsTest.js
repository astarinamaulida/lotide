const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

// TEST CODE
describe("#eqObjects", () => {
  it("returns true when the array value is equal", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    //eqObjects(cd, dc); // => true
    assert.strictEqual(eqArrays(eqObjects(cd, dc), true), true);
  });
});


/*const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqArrays(eqObjects(cd, dc), true), true);
console.log(eqObjects(cd,dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqArrays(eqObjects(cd, cd2), false), false);
console.log(eqObjects(cd, cd2));
console.log((eqArrays(eqObjects(cd, cd2), false)));
console.log((eqArrays(eqObjects(cd, cd2), true)));
console.log(eqObjects(cd2,dc));*/