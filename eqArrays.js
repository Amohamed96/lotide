const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++){
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

module.exports = eqArrays;