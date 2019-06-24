// INSTRUCTIONS 
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).


var bubbleSort = function(array) {
  // declare temporary variable equal to false that gets switched when sorts occur
  let redo = false;
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if current element is greater than element at i + 1
    if (array[i] > array[i + 1]) {
      // switch those two elements positions
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      // re-assign redo to true
      redo = true;
    }
  }
  
  // if redo is true, call bubbleSort on array, else return sorted array
  return redo ? bubbleSort(array) : array;
};




////////////////////* TEST CASES *////////////////////

Array.prototype.sort = null;
var input = [20, -10, -10, 2, 4, 299];
var expected1 = [-10, -10, 2, 4, 20, 299].toString();
var actual1 = bubbleSort(input).toString();
console.log(`Test1 result: ${expected1 === actual1}; Expected ${expected1} and got ${actual1}`)

//////////////////////////////////////////////////////

Array.prototype.sort = null;
var input = [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
var expected2 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 22, 22, 222, 2222].toString();
var actual2 = bubbleSort(input).toString();
console.log(`Test2 result: ${expected2 === actual2}; Expected ${expected2} and got ${actual2}`)

//////////////////////////////////////////////////////

Array.prototype.sort = null;
var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
var expected3 = [18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40].toString();
var actual3 = bubbleSort(input).toString();
console.log(`Test3 result: ${expected3 === actual3}; Expected ${expected3} and got ${actual3}`)
