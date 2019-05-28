/**
 * @param {number[]} A
 * @return {number[]}
 */


var sortedSquares = function(A) {
  // declare new array
  const newA = [];
  // iterate through input array
  A.forEach((num) => {
      // square each element
      newA.push(Math.pow(num, 2));
  });
  // sort new array
  // return new array
  return newA.sort((a, b) => {return a - b}); 
};

var sortedSquares = function(A) {
    // declare new array
    const newA = [];
    // iterate through input array
    return A.map((num) => {
        // square each element
        return Math.pow(num, 2);
    }).sort((a, b) => {return a - b});
};


console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
