const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    //For arrays with one or two elements, there is no middle. Return an empty array.
    if (array.length <= 2) {
      return [];
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
    } else if (array.length % 3 === 0) {
      const middle = array[Math.floor(array.length / 2)];
      return middle;
    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    } else if (array.length % 2 === 0) {
      const midPoint = array.length / 2;
      const middle2 = [array[midPoint - 1], array[midPoint]];
      return middle2;
    }
  }
};

module.exports = middle;