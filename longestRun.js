// inputs: string 
// outputs: array of starting and ending index of longest run

function longestRun(string) {
  // split string characters into an array
  const letters = string.split('');
  
  // set temp variables, one to track current run and one to track longest
  let curr = [0, 0];
  let longest = [0, 0];

  // iterate through letters array
  for (let i = 1; i < letters.length; i++) {
    // if current letter is equal to letter before it
    if (letters[i] === letters[i - 1]) {
      // set end of current run equal to i
      curr[1] = i;
      // if difference of start and end of current run is greater than difference of longest
      if ((curr[1] - curr[0]) > (longest[1] - longest[0])) {
        // re-assign longest to current run
        longest = curr;
      }
      // else start tracking a new run
    } else {
      // re-assign both elements in curr to current position
      curr = [i, i];
    }
  }
  // return longest after for loop has finished
  return longest;
};


console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);
