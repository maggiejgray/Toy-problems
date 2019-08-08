
// time complexity: linear O(n)
// space complexity: linear O(n)
// function evenOccurrence (arr) {
//   // declare storage object to track count of each letter
//   const storage = {};

//   // iterate through array
//   for (let i = 0; i < arr.length; i++) {
//     // if not already in storage
//     if (!storage[arr[i]]) {
//       // add as a key with value of 1
//       storage[arr[i]] = 1;
//     } else {
//       // else increment existing key
//       storage[arr[i]]++;
//     }
//   }

//   // iterate through array
//   for (let j = 0; j < arr.length; j++) {
//     // if element has an even value in storage
//     if(storage[arr[j]] % 2 === 0) {
//       // return that element
//       return arr[j];
//     }
//   }
  
//   // else return null
//   return null;
// };

function evenOccurrence(arr) {
  // declare object to store occurrence of each element in 
  // iterate through input array
    // check if current element is already a key in object
    // if it is not, initialize key with value = 1;
    // if it is, increment count by 1
  // iterate through object
    // check if value is divisible by 2
    // if it is, return that key
  // if no value is returned from above loop, return null
};

console.log(evenOccurrence([1, 3, 3, 3, 4, 2, 4, 4, 2, 5])); // 2

console.log(evenOccurrence(['cat', 'dog', 'dig', 'cat'])); // 'cat'

console.log(evenOccurrence(['meow', 2, 1, 'meow'])); // 'meow

console.log(evenOccurrence(['red', 'orange', 'yellow', 'green'])); // null

