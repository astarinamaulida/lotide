// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  return source.filter(item => itemsToRemove.indexOf(item) === -1);
};
module.exports = without;