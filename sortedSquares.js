/**
 * @param {number[]} A
 * @return {number[]}
 */

 // inputs: array of integers - array
 // outputs: array of squared, then sorted integers - array


var sortedSquares = function(A) {
  // declare new array
  const newA = [];
  // iterate through input array
  A.forEach((num) => {
      // square each element and push to newArray
      newA.push(Math.pow(num, 2));
  });
  // return sorted new array in ascending order
  return newA.sort((a, b) => {return a - b}); 
};

var sortedSquares = function(A) {
    // return new array
    return A.map((num) => {
        // square each element, then sort in ascending order
        return Math.pow(num, 2);
    }).sort((a, b) => {return a - b});
    // sort function is passed a and b which are two elements to compare
      // each return of the sort function results in a number < 0, === 0, or > 0
      // if < 0, sort a to lower index than b
      // if > 0, sort b to a lower index than a
      // if === 0, leave a and b unchanged in respect to each other
};


console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
