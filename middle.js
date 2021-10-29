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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅ These two arrays are equal!");
  } else {
    console.log("❌ These two arrays are not equal!");
  }
};

const middle = function (array) {
  const newArray = [];
  const a = [];
  // Odd or Even? 
  if (array.length % 2 !== 0) {
    midIndex = (array.length - 1) / 2
    newArray.push(array[midIndex])
    return newArray;
  } else if (array.length % 2 === 0){
    if (array.length === 2) {
      return a;
    }
    midIndexA = array.length / 2;
    midIndexB = midIndexA - 1;
    newArray.push(array[midIndexB], array[midIndexA]);
    return newArray;
  } else {
    return newArray;
  }
  
}
// middle([1, 2, 3])
// middle([1, 2])
// middle([1, 2, 3, 4])
// middle([1, 2, 3, 4, 5, 6])
// middle([1, 2, 3, 4, 5])

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 