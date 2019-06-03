// Given an arbitrary input string, 
// return the first non-repeating character
// For strings with all repeats, return 'sorry'

// time complexity: O(n)
function firstNonRepeatedCharacter(string) {
  // declare storage object
  const obj = {};
  // iterate through string and create count for each letter
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      // if not already in object, create
      obj[string[i]] = 1;
    } else {
      // else increment for that character 
      obj[string[i]]++;
    }
  }

  // iterate through input string
  for (let j = 0; j < string.length; j++) {
    // check if each character has value of 1 in obj and return first occurence
    if (obj[string[j]] === 1) {
      return string[j];
    } 
  }
  // if no characters occur once return string sorry
  return 'sorry';
};

console.log(firstNonRepeatedCharacter('ABCDBIRDUP')); // 'A'
console.log(firstNonRepeatedCharacter('XXXX')); // 'sorry'
console.log(firstNonRepeatedCharacter('ALABAMA')); // 'L'
console.log(firstNonRepeatedCharacter('BABA')); // 'sorry'