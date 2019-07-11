function longestPalindrome (string) {
  // will re-assign result as search through palindromes
  let result = '';
  // split chars into array
  const chars = string.split('');
  // declare array to push possible results to
  const palindromes = [];
  // iterate through each character in string
  chars.forEach((char, i) => {
    // for each character start building all possible strings from char to end of string
    let str = char;
    for (let j = i + 1; j < string.length; j ++) {
      str += string[j];
      // for each iteration of building string, test if palindrome
      if (isPalindrome(str)) {
        // if it is, push to array
        palindromes.push(str);
      }
    }
  });
  // iterate through palindromes and check length and only re-assign result if longer
  palindromes.forEach((palindrome) => {
    if (palindrome.length > result.length) {
      result = palindrome;
    }
  });
  
  // console.log('result:', result);
  return result;
};

// helper function to check for palindromes
// time complexity = O(3n) > O(n)
function isPalindrome (string) {
  return string === string.split('').reverse().join('');
};

// sliding window technique
function longestPalindrome(string) {
  // set initial window length to entire string length
  let windowLength = string.length;

  // while window length > 0
  while (windowLength > 0) {
    // calculate how many times to slide window
    let slideCount = string.length - windowLength;
    // for loop to do the "sliding" and check if substring is a palindrome
    for (let i = 0; i <= slideCount; i++) {
      // save possibility
      let possiblility = string.slice(i, windowLength + i);
      // check if possibility is a palindrome
      if (isPalindrome(possiblility)) {
        // if it is return it
        return possiblility;
      }
    }
    // decrease window size by one
    windowLength -= 1;
  }
};


console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
console.log(`Test4: expected "tattarrattat" and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);

