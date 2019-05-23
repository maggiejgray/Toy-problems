// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc. 
// return the sum of the values of each letter in string

// function solve(string) {
//   let sum = 0;
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const alphaValues = {};
//   for (let i = 0; i < alphabet.length; i++) {
//     let letter = alphabet[i];
//     alphaValues[letter] = i + 1;
//   }

//   for (let i = 0; i < string.length; i++) {
//     let curr = string[i];
//     sum += alphaValues[curr];
//   }
//   return sum;
// };

// function solve(string) {
//   let sum = 0;
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const alphaValues = {
//     a: 1, b: 2, c: 3, d: 4,
//     e: 5, f: 6, g: 7, h: 8,
//     i: 9, j: 10, k: 11, l: 12,
//     m: 13, n: 14, o: 15, p: 16,
//     q: 17, r: 18, s: 19, t: 20,
//     u: 21, v: 22, w: 23, x: 24,
//     y: 25, z: 26,
//   };

//   for (let i = 0; i < string.length; i++) {
//     let curr = string[i];
//     sum += alphaValues[curr];
//   }
//   return sum;
// };

// function solve(string) {
//   let sum = 0;
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   for (let i = 0; i < string.length; i++) {
//     let curr = string[i];
//     sum += (alphabet.indexOf(curr) + 1);
//   }
//   return sum;
// };

// function solve(string) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const letters = string.split('');

//   const values = letters.map((letter) => {
//     return alphabet.indexOf(letter) + 1;
//   });

//   return values.reduce((sum, curr) => {
//     return sum += curr;
//   }, 0);
// };

function solve(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = string.split('');

  return letters.reduce((sum, curr) => {
    return sum += (alphabet.indexOf(curr) + 1);
  }, 0);
};

console.log(solve('zodiac'));
console.log(solve('strength'));
console.log(solve('chruschtschov'));
console.log(solve('abcde'));