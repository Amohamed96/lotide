// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++){
//     if (array1[i] === array2[i]) {
//       result = true;
//     } else {
//       return false;
//     }
//   }
//   return result;
// }

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log("These two arrays are equal!");
//   } else {
//     console.log("These two arrays are not equal!")
//   }
// }
midArray = [];
const middle = function (array) {
  for (let numbers of array) {
    midArray.push(numbers);
  }
  console.log(midArray);
}

middle([1, 2, 3]);