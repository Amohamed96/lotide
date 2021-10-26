const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Asserstion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Asserstion Failed: ${actual} !== ${expected}`);
  }
};
const arrayTail = [];

const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 

