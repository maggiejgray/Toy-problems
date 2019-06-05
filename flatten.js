// inputs: array of arrays
// outputs: single array of non-array elements

// self-recursing solution
function flatten (arrays) {
  // declare result array
  let result = [];
  
  // iterate through arrays array
  for (let i = 0; i < arrays.length; i++) {
    // if element is not an array
    if (!Array.isArray(arrays[i])) {
      // push to result
      result.push(arrays[i]);
    } else {
    // if element is an array
      // re-assign result to current result 
      // concatenated with return of callning flatten on current element
      result = result.concat(flatten(arrays[i]));
    }
  }
  
  // return result array
  return result;
};

// using inner helper recursing function
function flatten (arrays) {
  // declare result array
  const result = [];
  
  // helper function to flatten array
  const helper = (array) => {
    // iterate through array
    array.forEach((element) => {
      // if element is not an array, push to result
      if (!Array.isArray(element)) {
        result.push(element);
      } else {
        // else, call helper on element
        helper(element);
      }
    });
  };
  
  // call helper on arrays for first call
  helper(arrays);
  
  // return result array
  return result;
};

console.log(flatten([[10], [20, 30], [40]]));
console.log(flatten([1, 2, [3], 4, [5, [6], 7]]));
console.log(flatten([[[[]]]]));