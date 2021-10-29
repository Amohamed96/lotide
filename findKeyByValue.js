const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Asserstion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Asserstion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (obj, value) {
  console.log(obj[value]);
}

findKeyByValue(bestTVShowsByGenre, "The Wire");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);