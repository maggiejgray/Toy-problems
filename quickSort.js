function quickSort(array) {
  if (!array.length) return array;
  // set temp pivot equal to last element in array
  let pivot = array[array.length - 1];
  // declare two partitions
  const part1 = [];
  const part2 = [];
  // iterate through array
  for (let i = 0; i < array.length - 1; i++) {
    // if element is less or equal to target
    if (array[i] <= pivot) {
      // add to part1
      part1.push(array[i]);
    } else if (array[i] > pivot) {
      // else add to part2
      part2.push(array[i])
    }
  }

  // return quicksorted part1 concatenated with pivot and quicksorted part2
  return quickSort(part1).concat(pivot).concat(quickSort(part2));
};


const test1 = quickSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = quickSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = quickSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = quickSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = quickSort([1]);
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
const test6 = quickSort(arr);
console.log(`Should handle large array: ${JSON.stringify(test6) === JSON.stringify(test7)}`);