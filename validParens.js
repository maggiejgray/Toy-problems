function validParens(string) {
  // declare storage array to store opening parentheses in
  var storage = [];

  // iterate through string
  for (var i = 0; i < string.length; i++) {
    // check every character...
    // if opening parentheses
    if (string[i] === '(') {
      // push to storage
      storage.push(string[i]);
    // if closing parentheses
    } else if (string[i] === ')') {
      // see if matches storage.pop();
      if (storage.pop() !== '(') {
        // if not a match, return false
        return false;
      } 
    }
  }
  // check if any stray opening parens still in storage
  if (!storage.length) {
    // if no extras, return true
    return true
  } else {
    // else return false
    return false;
  }
};

function validParens(string) {
  var count = 0;

  // iterate through string
  for (var i = 0; i < string.length; i++) {
    if(count < 0) {return false};
    // check every character...
    // if opening parentheses
    if (string[i] === '(') {
      // push to storage
      count++
    // if closing parentheses
    } else if (string[i] === ')') {
      // see if matches storage.pop();
      count--;
    }
  }

  return count === 0;
};

console.log(validParens('()()')); // true
console.log(validParens(')()()')); // false
console.log(validParens('(()())')); // true
console.log(validParens(')()(')); // false
console.log(validParens('((()))()')); // true
console.log(validParens('((())()')); // false