
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

module.exports = middle;