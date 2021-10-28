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
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);