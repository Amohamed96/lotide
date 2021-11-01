const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const arr = [62, 55,35, 40, 9, 68, 46, 31, 56]
console.log(results1); 
