// input: array of numbers, 1s and 0s
// output: number indicating max consecutive 1s

// constraints? 
// edge cases: empty array, non 0s or 1s, only 0s, only 1s

var findMaxConsecutiveOnes = function(nums) {
  let curr = 0;
  let max = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          curr++;
          
          if (curr > max) {
              max = curr;
          }
      } else if (nums[i] === 0) {
          curr = 0;
      }
  }

  return max;
};