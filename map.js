// Copy in our assertArraysEqual function in order to test our map function.

/*Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based on the results of the callback function.*/

//Call map and pass in our words and a simple arrow function.

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;