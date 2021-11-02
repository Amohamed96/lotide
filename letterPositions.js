const letterPositions = function(sentence) {
  let indexVal = [];
  const results = {};
  sentence.split('').forEach(function (letter, index) {
    results[letter] += [index];
    // removing += works for letters only appearing once
  })
  return results;
};

module.exports = letterPositions;