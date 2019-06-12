// write the method isSubsetOf for the Array prototype
// takes in one input parameter, an array of primitives
// returns a boolean
  // true: if arr contains all elements in Array the method is being invoked on (ignoring duplicates)
  // false: if arr does not contain all elements

  
Array.prototype.isSubsetOf = function(arr) {
  // iterate through array that method being called on
  for (let i = 0; i < this.length; i++) {
    // for each element, if input arr does not include
    if(!arr.includes(this[i])) {
      return false
    }
  }
  // return true at end if no falses returned
  return true;
};

Array.prototype.isSubsetOf = function(arr) {
  // check if every element in 'this' array is included in arr array
  return this.every((element) => {
    return arr.includes(element)
  });
};

const test1 = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']); // true
const test2 = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']); // false
const test3 = ['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog']); // true
const test4 = [1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1]); // true

console.log('test1:', test1);
console.log('test2:', test2);
console.log('test3:', test3);
console.log('test4:', test4);