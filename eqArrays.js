const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Asserstion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Asserstion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++){
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
  // for (let i = 0; i < array2.length; i++) {
  //   return array2;
  // }
  
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), true);