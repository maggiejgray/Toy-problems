// inputs: string 
// outputs: array of starting and ending index of longest run

function longestRun(string) {
  const letters = string.split('');
  
  let curr = [0, 0];
  let longest = [0, 0];
  
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === letters[i - 1]) {
      curr[1] = i;
      if ((curr[1] - curr[0]) > (longest[1] - longest[0])) {
        longest = curr;
      }
    } else {
      // curr[0] = i;
      // curr[1] = i;
      curr = [i];
    }
  }
  return longest;
};

console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);
