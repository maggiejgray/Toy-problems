// Given a lowercase string that has alphabetic characters only and no spaces, 
// return the highest value of consonant substrings
// EXAMPLES
// -- We shall assign the following values: a = 1, b = 2 ... z = 26.

// For example, for the word "zodiacs", solve("zodiacs") = 26
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(string) {
  // extract consonant only substrings
  const conSubStrings = string.split(/a|e|i|o|u/g);
  // declare variable to track highest value 
  let max = 0;
  
  // iterate through string
  for (let i = 0; i < conSubStrings.length; i++) {
    if (getValue(conSubStrings[i]) > max) {
      // calculate value of each substring
      max = getValue(conSubStrings[i]);
    }
  }
  // return highest value of substring
  return max;
};

function getValue(str) {
  console.log('str:', str);
  let sum = 0;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    sum += (alphabet.indexOf(curr) + 1);
  }

  return sum;
};

console.log(solve('hippopotamus'));
console.log(solve('chruschtschov'));
console.log(solve('the sky is blue'));
console.log(solve(''));