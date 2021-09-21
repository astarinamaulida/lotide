// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  const objectKey = Object.keys(object);
  for (let arr of objectKey) {
    if (callback(object[arr]) === true) {
      return arr;
    }
  }
};
module.exports = findKey;