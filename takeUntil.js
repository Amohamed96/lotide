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
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

