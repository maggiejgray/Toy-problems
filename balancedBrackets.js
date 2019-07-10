

function isBalanced (str) {
  // stack to store all opening brackets
  const stack = []; 
  // library to check if bracket is an opener
  const openers = {
    '(': true,
    '[': true,
    '{': true
  };
  // library to check if closer has corresponding opener 
  const closers = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  // iterate through str
  for (let i = 0; i < str.length; i ++) {
    // only check brackets
    if (openers[str[i]] || closers[str[i]]) {
      // if opening bracket
      if (openers[str[i]]) {
        // push to stack
        stack.push(str[i]);
        // if closing bracket
      } else if (closers[str[i]]) {
        // check if matches bracket at top of stack 
        if (stack.pop() !== closers[str[i]]) {
          // if it does not return false
          return false;
        }
      }
    }
  }
  // if there are still brackets in the stack after the for loop return false
  if (stack.length) {
    return false;
  }
  // else return true
  return true;
};

console.log(`Test1: expected false and got ${isBalanced(')(')}`);
console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
console.log(`Test9: expected true and got ${isBalanced('{}')}`);
console.log(`Test10: expected false and got ${isBalanced('{')}`);
console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
console.log(`Test13: expected false and got ${isBalanced('}')}`);
console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);
