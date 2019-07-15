var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// time complexity: linear
function translateRomanNumeral (romanNumeral) {
  // set initial result equal to 0
  let result = 0;
  
  // iterate through string
  for (let i = 0; i < romanNumeral.length; i++) {
    // conditional to check for invalid characters each time
    if (!DIGIT_VALUES[romanNumeral[i]]) {
      // if any character is invalid, return null
      return "null";
    }
    // add each value to result
    result += DIGIT_VALUES[romanNumeral[i]];
    
    // check if previous value was smaller than current
    if (DIGIT_VALUES[romanNumeral[i - 1]] < DIGIT_VALUES[romanNumeral[i]]) {
      // if it was, subtract those two values 
      result -= DIGIT_VALUES[romanNumeral[i - 1]] + DIGIT_VALUES[romanNumeral[i]];
      // re-add difference of two values to result
      result += DIGIT_VALUES[romanNumeral[i]] - DIGIT_VALUES[romanNumeral[i - 1]];
    }
  }
  // return result
  return result;
};

console.log(`Test1: expected 500 and got ${translateRomanNumeral('D')}`);
console.log(`Test2: expected 4 and got ${translateRomanNumeral('IV')}`);
console.log(`Test3: expected 100 and got ${translateRomanNumeral('C')}`);
console.log(`Test4: expected 7 and got ${translateRomanNumeral('VII')}`);
console.log(`Test5: expected 1990 and got ${translateRomanNumeral('MCMXC')}`);
console.log(`Test6: expected 10 and got ${translateRomanNumeral('X')}`);
console.log(`Test7: expected 0 and got ${translateRomanNumeral('')}`);
console.log(`Test8: expected 6 and got ${translateRomanNumeral('VI')}`);
console.log(`Test9: expected 5 and got ${translateRomanNumeral('V')}`);
console.log(`Test10: expected 50 and got ${translateRomanNumeral('L')}`);
console.log(`Test11: expected 1900 and got ${translateRomanNumeral('MCM')}`);
console.log(`Test12: expected 2 and got ${translateRomanNumeral('II')}`);
console.log(`Test13: expected 15 and got ${translateRomanNumeral('XV')}`);
console.log(`Test14: expected 1910 and got ${translateRomanNumeral('MCMX')}`);
console.log(`Test15: expected 4 and got ${translateRomanNumeral('IV')}`);
console.log(`Test16: expected 2008 and got ${translateRomanNumeral('MMVIII')}`);
console.log(`Test17: expected 1954 and got ${translateRomanNumeral('MCMLIV')}`);
console.log(`Test18: expected 1 and got ${translateRomanNumeral('I')}`);
console.log(`Test19: expected 1000 and got ${translateRomanNumeral('M')}`);
console.log(`Test20: expected null and got ${translateRomanNumeral('horse')}`);
console.log(`Test21: expected 14 and got ${translateRomanNumeral('XIV')}`);
console.log(`Test22: expected 1910 and got ${translateRomanNumeral('MDCCCCX')}`);
console.log(`Test23: expected 60 and got ${translateRomanNumeral('LX')}`);