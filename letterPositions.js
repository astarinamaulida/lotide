// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  let str = sentence.toLowerCase().split(" ").join("");
  const results = {};

  // logic to update results here
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;