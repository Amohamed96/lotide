const without = function (numbers, removeNum) {
  let output = [];
  // let check = "";
  for (let i = 0; i < numbers.length; i++) {
    let match = false;
    for (val of removeNum) {
      if (val === numbers[i]) {
        match = true;
      } 
    } 
    if (!match) {
      output.push(numbers[i]);
    }
  }
  console.log(output)
}

module.exports = without;