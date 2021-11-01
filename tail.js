const assertEqual = require('./assertEqual');
const arrayTail = [];

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};


module.exports = tail;