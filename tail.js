// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
  
let tail = function(array) {
  return array.slice(1, array.length);
};

module.exports = tail;
