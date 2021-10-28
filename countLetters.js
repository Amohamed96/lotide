const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Asserstion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Asserstion Failed: ${actual} !== ${expected}`);
  }
};
const values = {};

const countLetters = function (words) {
  let repeatVal = 0;
    words.split('').forEach(letter => {
      values[letter] = values[letter] ? (values[letter] + 1) : 1
    });    
  
  console.log(values);
}

countLetters("lighthouse in the house");