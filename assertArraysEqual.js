const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let result;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
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
    console.log("These two arrays are equal!");
  } else {
    console.log("These two arrays are not equal!");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);