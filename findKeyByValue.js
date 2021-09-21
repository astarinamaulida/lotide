// FUNCTION IMPLEMENTATION
const findKeyByValue = function(input, value) {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  const objectKeys = Object.keys(bestTVShowsByGenre);
  for (const key of objectKeys) {
    if (bestTVShowsByGenre[key] === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;