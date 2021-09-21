const middle = function(array) {
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return [];
  }
  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    const midPoint = array.length / 2;
    return [array[Math.ceil(midPoint - 1)], array[Math.ceil(midPoint)]];
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 === 1) {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;