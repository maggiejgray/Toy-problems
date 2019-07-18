const allAnagrams = function(string) {
  // declare storage object
  const results = {};

  // helper function that takes in a curr and remaining string
  const makeAnagrams = function(curr, remain) {
    // if length of curr === string
    if (curr.length === string.length) {
      // add curr to object
      results[curr] = true;
      // else 
    } else {
      // iterate through remain
      for (let i = 0; i < remain.length; i++) {
        // recursively call helper function with curr concat with current char and slice char out of remain
        makeAnagrams(curr + remain[i], remain.slice(0, i) + remain.slice(i + 1));
      }
    }
  };
  // first invocation is with ('', string)
  makeAnagrams('', string);

  // return keys of storage object
  return Object.keys(results);
};

console.log(allAnagrams('abc'));