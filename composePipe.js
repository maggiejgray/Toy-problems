// Implement the functions compose and pipe.

// COMPOSE =>
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.
// You can think of compose as moving right to left through its arguments.

// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// console.log(`Test1: ${welcome('phillip')}`); //=> 'hi: PHILLIP!'

// use rest parameter to convert all function arguments into an array
var compose = function(...funcs) {
  // return a function with single parameter to be initial value for reduce
  return function(param) {
    // iterate through functions array from right to left
    return funcs.reduceRight((acc, curr) => {
      // for each iteration return current function invoked with acc parameter
      return curr(acc);
    }, param);
  }
  
};

// PIPE =>
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.
// You can think of pipe as moving left to right through its arguments.

// Example
// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// console.log(`Test2: ${pipe(add2, multiplyBy3)(5)}`); //=> 21
// console.log(`Test3: ${pipe(add2, multiplyBy3, multiplyBy3)(5)}`); //=> 63

var pipe = function(...funcs){
  return function(param) {
    return funcs.reduce((acc, curr) => {
      return curr(acc);
    }, param);
  }
};

// HINT: You should use the functions reduce() and reduceRight() in your solutions.


// TESTS:
console.log(`Test1: compose should return a function - expected true and got ${typeof compose(function() {return 'Hi!'}) === 'function'}`);

var greet = function(name){return 'hi: ' + name;};
var exclaim = function(statement){return statement.toUpperCase() + '!'};
var welcome = compose(greet, exclaim);
console.log(`Test2: should compose 2 functions - expected "hi: PHILLIP!" and got "${welcome('phillip')}"`);
console.log(`Test3: should compose 2 functions - expected "hi: KIA!" and got "${welcome('kia')}"`);

// should be able to compose multiple functions
var first = function(array){return array[0];};
var shift = function(array){return array.slice(1);};
var fifth = compose(first, shift, shift, shift, shift);
console.log(`Test4: should be able to compose multiple functions - expected ${5} and got ${fifth([1,2,3,4,5,6,7,8,9])}`);

// should handle multiple composes
var fifth2 = compose(first, shift, shift, compose(shift, shift));
console.log(`Test5: should handle multiple composes - expected ${5} and got ${fifth2([1,2,3,4,5,6,7,8,9])}`);

///////////////////////////////////////////////////////

function multiplyBy3(number){return number * 3};
function add2(value){return value + 2};
console.log(`Test1.2: pipe should return a function - expected true and got ${typeof pipe(add2, multiplyBy3) === 'function'}`);

// should pass the input through a function
console.log(`Test2.2: should pass the input through a function - expected ${23} and got ${pipe(add2)(21)}`);

// should pass input through two functions
console.log(`Test3.2: should be able to pass input through two functions - expected ${21} and got ${pipe(add2, multiplyBy3)(5)}`);

// should pass the input through multiple functions
console.log(`Test4.2: should pass the input through multiple functions - expected ${87} and got ${pipe(add2, multiplyBy3, add2, multiplyBy3)(7)}`);

// should handle multiple pipes
console.log(`Test5.2: should handle multiple pipes - expected ${81} and got ${pipe(pipe(add2, multiplyBy3), multiplyBy3)(7)}`);




