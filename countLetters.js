
const values = {};

const countLetters = function (words) {
  let repeatVal = 0;
    words.split('').forEach(letter => {
      values[letter] = values[letter] ? (values[letter] + 1) : 1
    });    
  
  console.log(values);
}

module.exports = countLetters;