// Write a function that takes as its input a string 
// and returns an array of arrays as shown below 
// sorted in descending order by frequency 
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency (string) {
  // declare storage object
  const obj = {};
  // declare result array
  const result = [];
  // iterate through string to create counter object
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  // iterate through object to create array
  for (let key in obj) {
    let charArr = [];
    charArr[0] = key;
    charArr[1] = obj[key];
    result.push(charArr);
  }
  // sort array
  result.sort(function(a, b) {
    // first sort by occurrence
    if(a[1] > b[1]) {
      return -1; // put a at a lower index than b
    } else if (a[1] < b[1]) {
      return 1; // put a at a higher index than b
      // then sort alphabetically (ascii => a = 97, z = 122 )
    } else if (a[0] < b[0]) {
      return -1; // put a at a lower index than b
    } else if (a[0] > b[0]) {
      return 1; // put a at a higher index than b 
    }
  });

  return result;
};


console.log(characterFrequency("mississippi"));

