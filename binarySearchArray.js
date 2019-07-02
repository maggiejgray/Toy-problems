// array = sorted array of integers
// target = an integer value
// return index of target

// issue is returning index from original array???

// iterative approach
function binarySearch (array, target) {
  // set temp start and end = start and end of entire array
  let start = 0;
  let end = array.length - 1;

  // while loop to search until array to search is empty
  while (start <= end) {
    // calculate midpoint of array
    let mid = Math.floor((start + end) / 2);

    // if array at mid is equal to target
    if(array[mid] === target) {
      // return mid
      return mid;
      // if element at mid is less than target 
    } else if (array[mid] < target) {
      // re-assign start to mid + 1
      start = mid + 1;
      // if element at mid is greater than target
    } else if (array[mid] > target) {
      // re-assign end to 1 less than mid
      end = mid - 1;
    }
  }
  
  // if while loop finishes without returning, target not found
  return -1;
};

console.log(`Test1: expected ${binarySearch([5], 4)} to be -1`);
console.log(`Test2: expected ${binarySearch([11, 12, 13, 14, 15], 11)} to be 0`);
console.log(`Test3: expected ${binarySearch([11, 12, 13, 14, 15], 12)} to be 1`);
console.log(`Test4: expected ${binarySearch([11, 12, 13, 14, 15], 13)} to be 2`);
console.log(`Test5: expected ${binarySearch([11, 12, 13, 14, 15], 14)} to be 3`);
console.log(`Test6: expected ${binarySearch([11, 12, 13, 14, 15], 15)} to be 4`);
console.log(`Test7: expected ${binarySearch([11, 12, 13, 14, 15], 16)} to be -1`);

