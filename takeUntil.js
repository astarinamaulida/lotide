/* Implementing a function that will take in two parameters as well:
The array to work with
The callback (which Lodash calls "predicate")*/

// FUNCTION IMPLEMENTATION

//The function will return a "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
      return array;
    }
  }
};
module.exports = takeUntil;