// // using map and forEach
function lastIndexOf (array, target) {
  let targetIndex = -1;

  const bools = array.map((element) => {
    if (element === target) {
      return true;
    } else {
      return false;
    }
  });
  
  bools.forEach((bool, index) => {
    if(bool) {
      targetIndex = index;
    }
  });

  return targetIndex;
};

// // using reduce
function lastIndexOf (array, target) {
  let targetIndex = -1;

  const copy = array.slice();
  copy.reduce((acc, curr, index) => {
    if (curr === target) {
      targetIndex = index
    }
  }, -1);
  
  return targetIndex;
};

// using map and filter
function lastIndexOf (array, target) {
  const matches = array.map((element, index) =>{
    if (element === target) {
      return index;
    } else { 
      return null;
    }; 
  });
  
  const filtered = matches.filter((element) => {
    if (typeof element === 'number') {
      return true;
    }
  });
  
  return filtered.length ? filtered[filtered.length - 1] : -1;
};

// recursive solution
function lastIndexOf (array, target) {
  // declare temp variables for currentIndex and targetIndex
  let currIndex = array.length - 1;
  let targetIndex = -1;
  // helper function to search for target in reverse order
  const search = (arr, targ, curr) => {
    // if iterated through entire array and target not found, return(-1)
    if(curr < 0) {
      return targetIndex;
    }
    // if current element === target
    if(array[curr] === targ) {
      // re-assign targetIndex
      targetIndex = curr;
      return targetIndex;
    } else {
      // if not equal to target, decrement index and call search again
      currIndex--;
      search(array, target, currIndex);
    }
  };
  
  // initial call to search
  search(array, target, currIndex);
  
  // after search finishes, return targetIndex;
  return targetIndex;
};