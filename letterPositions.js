const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    let result;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  }
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ These two arrays are equal!");
  } else {
    console.log("❌ These two arrays are not equal!");
  }
}

const letterPositions = function(sentence) {
  let indexVal = [];
  const results = {};
  sentence.split('').forEach(function (letter, index) {
    results[letter] += [index];
    // removing += works for letters only appearing once
  })
  return results;
};
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);