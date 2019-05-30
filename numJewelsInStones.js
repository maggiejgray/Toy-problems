// inputs: two strings
// outputs: number representing count of any letters in str1 that occur in str2

// time complexity: O(n^2)
function numJewelsInStones(str1, str2) {  
  // declare counter variable
  let count = 0;
  // iterate through str2
  for (let i = 0; i < str2.length; i++) {
    // if str1 includes character increment count
    if(str1.includes(str2[i])) {
      count++;
    }
  }
  // return counter variable
  return count;
};


// time complexity: O(2n) **drop constant** >>> O(n)
function numJewelsInStones(str1, str2) {  
  // declare storage object for str1
  const library = {};
  // declare counter variable
  let count = 0;
  // iterate through str1 to populate library
  for (let i = 0; i < str1.length; i++) {
    library[str1[i]] = true;
  }
  
  for (let j = 0; j < str2.length; j++) {
    if(library[str2[j]]) {
      count++;
    }
  }
  // return counter variable
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
console.log(numJewelsInStones('bZw', 'BbzZZwW')); // 4
