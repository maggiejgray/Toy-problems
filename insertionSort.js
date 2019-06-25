function insertionSort (array) {
  // first element is considered sorted
  // for loop to iterate through unsorted elements
  for (let i = 1; i < array.length; i++) {
    // to sort every element, iterate backwards starting at current position down to 0
    for (let j = i; j >= 0; j--) {
      // if element at j-1 is defined and is greater than current
      if (array[j - 1] && array[j].value < array[j - 1].value) {
        // switch positions
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
      }
    }
  }
  // return array
  return array;
};


const test1 = insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]);
console.log(`Test1: expected [ { "value": 1 }, { "value": 2 }, { "value": 3 } ] and got ${JSON.stringify(test1)}`);
const test2 = insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]);
console.log(`Test2: expected [ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ] and got ${JSON.stringify(test2)}`);