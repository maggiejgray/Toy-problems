// inputs: string
// outputs: number

// using eval :(
function calculate (inputs) {
  // declare stack to store numbers
  const numStack = [];
  // split string by spaces
  const inputArr = inputs.split(' ');
  // iterate through array of 
  inputArr.forEach((el) => {
    // if element can be coerced into a number
    if(Number(el)) {
      // push to stack
      numStack.push(el);
      // else perform operation for two numbers popped off the stack
    } else if (el === '+' || el === '-' || el === '*' || el === '/') {
      let num1 = numStack.pop();
      let num2 = numStack.pop();
      let result = eval(num2 + el + num1);
      // push result back to stack
      numStack.push(result);
    }
  });
  
  // return only element left in stack (final result)
  return numStack[0];
};

// without eval!
function calculate (inputs) {
  const numStack = [];
  const inputArr = inputs.split(' ');
  
  inputArr.forEach((el) => {
    if(Number(el)) {
      numStack.push(el);
      // if + operator, add
    } else if (el === '+') {
      let num1 = Number(numStack.pop());
      let num2 = Number(numStack.pop());
      numStack.push(num1 + num2);
      // if - operator, subtract
    } else if (el === '-') {
      let num1 = Number(numStack.pop());
      let num2 = Number(numStack.pop());
      numStack.push(num2 - num1);
      // if * operator, multiply
    } else if (el === '*') {
      let num1 = Number(numStack.pop());
      let num2 = Number(numStack.pop());
      numStack.push(num1 * num2);
      // if / operator, divide
    } else if (el === '/') {
      let num1 = Number(numStack.pop());
      let num2 = Number(numStack.pop());
      numStack.push(num2 / num1);
    }
  });

  return numStack[0];
};

console.log(`Test1: for input "1 5 8 * +", expected 41 and got ${calculate('1 5 8 * +')}`);
console.log(`Test2: for input "1 5 8 + *", expected 13 and got ${calculate('1 5 8 + *')}`);
console.log(`Test3: for input "100 2 / 25 +", expected 75 and got ${calculate('100 2 / 25 +')}`);
console.log(`Test4: for input ".5 .5 +", expected 1 and got ${calculate('.5 .5 +')}`);



