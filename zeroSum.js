// inputs: array of numbers
// outputs: boolean

// time complexity: quadratic
function zeroSum (numbers) {
  // iterate through array
  for (let i = 0; i < numbers.length; i++) {
    // if current number is zero and there exists another zero
    if (numbers[i] === 0 && numbers.indexOf(numbers[i]) !== i) {
      return true;
      // if array includes same number but opposite sign and is not 0
    } else if (numbers.includes(numbers[i] * -1) && numbers[i] !== 0) {
      return true;
    }
  }
  // if no successful cases found, return false
  return false;
};

// time complexity: quadratic
function zeroSum (numbers) {
  // iterate through array of numbers
  for (let i = 0; i < numbers.length; i++) {
    // save current number
    let num1 = numbers[i];
    
    for (let j = 0; j < numbers.length; j++) {
      // save current number in inner loop to compare to num1
      let num2 = numbers[j];
      // if not same index and addition of numbers === 0
      if (i !== j && num1 + num2 === 0) {
        return true;
      }
    }
  }
  // if no matches found, return false
  return false;
};

// time complexity: linear
function zeroSum (numbers) {
  // declare storage object
  const storage = {};
  // declare result variable that will change on success
  let result = false;
  // iterate through input array
  for (let i = 0; i < numbers.length; i++) {
    // if storage does not include the opposite sign as a key
    if (!storage[numbers[i] * -1]) {
      // add it with value = true
      storage[numbers[i]] = true;
    } else {
      // if key of opposite sign does exist, re-assign result to true
      result = true;
    }
  }
  return result;
};

console.log(zeroSum([1, 3, 2, -3])); // true
console.log(zeroSum([5, 7, 2, 9])); // false
console.log(zeroSum([0, 1, 0, 1, 0])); // true
console.log(zeroSum([0])); // false
console.log(zeroSum([6, 7, 9, -4, 0, 5, -7])); // true
