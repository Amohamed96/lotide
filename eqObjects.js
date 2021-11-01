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
}
const eqObjects = function(object1, object2) {
  let output = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) output = output && false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    output = output && (eqArrays(object1[key], object2[key]));
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      output = output && eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);// ---> true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false
