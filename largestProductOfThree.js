var largestProductOfThree = function(array) {
  // Make a copy of the input array and sort it in ascending order
  const sorted = array.slice().sort((a, b) => {
    return a - b;
  });
  // save length for conveinence
  var length = array.length;
  // calculate two potential largest products
  // calculate product of three largest numbers (this will be the answer for either all +'s or all -'s)
  var lastProduct = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  // if array has both + and - numbers, largest product could come from lowest two numbers multiplied by highest number
  var firstProduct = sorted[length - 1] * sorted[0] * sorted[1];
  // return largest of two calculated products
  return Math.max(firstProduct, lastProduct);
};


console.log(`Test1: expected ${42} and got ${largestProductOfThree([2, 1, 3, 7])}`);
console.log(`Test2: expected ${0} and got ${largestProductOfThree([0, 2, 3])}`);
console.log(`Test3: expected ${-6} and got ${largestProductOfThree([-5, -1, -3, -2, -4])}`);
console.log(`Test4: expected ${47027} and got ${largestProductOfThree([-31, 41, 34, -37, -17, 29])}`);

