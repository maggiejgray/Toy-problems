// inputs: array
// outputs: sorted array
// breaks array into set of arrays with length === 1, then sorts on merge

// principal behind mergeSort, it is easier to combine two sorted arrays vs two unsorted arrays
// time complexity: O(n)(log n)

// mergeSort() has the logic of continuously splitting array into arrays of length 1
function mergeSort(arr) {
  // if array is empty, return it
  if (!arr.length) return arr;

  // base case
  if (arr.length === 1) {
    return arr; 
  }
  
  // if array length greater than 1, find midpoint
  let midpoint = Math.floor(arr.length / 2);
  // split into left and right arrays
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  
  // call sortHelper on mergeSort(left), mergeSort(right)      
  return sortHelper(mergeSort(left), mergeSort(right));
};

// inputs: two arrays
// outputs: single sorted array
// sortHelper() has the merge logic
function sortHelper(arr1, arr2) {
  // declare newArray
  let newArray = [];
  
  // while arr1 and arr2 still both have length
  while (arr1.length && arr2.length) {
    // compare elements at index 0 and unshift smaller element into newArray
    if (arr1[0] < arr2[0]) {
      newArray.push(arr1.shift());
    } else {
      newArray.push(arr2.shift());
    }
  }

  // to account for leftover element, if arr1 and arr2 are not same length
  if (arr1.length) {
    newArray = newArray.concat(arr1);
  } else {
    newArray = newArray.concat(arr2);
  }
  // return new sorted array
  return newArray;
};



const test1 = mergeSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = mergeSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = mergeSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = mergeSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);

function createLargeArray() {
  var input = [];
  var sorted;
  var n = 100000;
  for (var i = 0; i < n; i++) {
    var number = Math.floor(Math.random() * n);
    input.push(number);
  }

  return input;
}

const arr = createLargeArray();
const test7 = arr.slice().sort((a, b) => a - b);
const test6 = mergeSort(arr);
console.log(`Should handle large array: ${JSON.stringify(test6) === JSON.stringify(test7)}`);