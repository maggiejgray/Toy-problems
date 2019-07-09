// inputs: a function defintion and context
// outputs: a new function bound to the passed in context
// must also be able to bind arguments
/// bound function should also be able to be called with arguments

// part I
var bind = function(func, context){
  // save any additional arguments (not including func and context) that are being bound in a variable
  const args1 = [...arguments].slice(2);
  
  // return an anonymous function DEFINITION
  return function(){
    // save any arguments that are being called when bound function is invoked
    const args2 = [...arguments];

    // combine both arguments arrays
    const combinedArgs = args1.concat(args2);
    
    // return the result of INVOKING the target func using the apply method with context and combinedArgs
    return func.apply(context, combinedArgs);
  }
};  


//STEP2
Function.prototype.bind = function(context) {
  // save any additional arguments (not including context) that are being bound in a variable
  const args1 = [...arguments].slice(1);
  
  // save the function that we want to bind 
  const func = this;
  // return an anonymous function DEFINITION
  return function(){
    // save any arguments that are being called when bound function is invoked
    const args2 = [...arguments];
    // combine both arguments arrays
    const combinedArgs = args1.concat(args2);
    
    // return the result of INVOKING the target func using the apply method with context and combinedArgs
    return func.apply(context, combinedArgs);
  }
};

// Part I tests!
// should return a function
var func1 = function(){ };
var res = bind(func1);
console.log(`Test1.1: should return a function - expected true and got ${typeof res === 'function'}`);

// should not return the original function
console.log(`Test2.1: should not return the original function - expected true and got ${res !== func1}`);

// should return a result when calling the bound function
var func2 = function(arg1){ return arg1 };
var context1 = null;
var boundFunc1 = bind(func2, context1, 'foobar');
var result1 = boundFunc1();
console.log(`Test3.1: should return a result when calling the bound function - expected foobar and got ${result1}`);

// should call the "curried" function in the bound context'
var func3 = function() { return this };
var context2 = { foo: 'bar' };
var boundFunc = bind(func3, context2);
var result2 = boundFunc();
console.log(`Test4.1: should call the "curried" function in the bound context - expected true and got ${result2 === context2}`);

// should bind the first argument
var boundFunc2 = bind(func2, context1, 'foo');
var result3 = boundFunc2();
console.log(`Test5.1: should bind the first argument - expected foo and got ${result3}`);

// should allow the bound function to be called multiple times with different arguments
var func4 = function(a, b){ return a + b };
var boundFunc3 = bind(func4, context1, 'wow ');
var result4 = boundFunc3('dawg');
var result5 = boundFunc3('man');
console.log(`Test6.1: should allow the bound function to be called multiple times with different arguments - expected wow dawg and got ${result4} - expected wow man and got ${result5}`);

// should bind the first and second arguments
var boundFunc4 = bind(func4, context1, 'foo', 'bar');
var result6 = boundFunc4();
console.log(`Test7.1: should bind the first and second arguments - expected foobar and got ${result6}`);

// should bind only first and second arguments (in this example) and allow the bound function to take the third
var func5 = function(a, b, c){ return a + b + c };
  //// here we only bind to the first 2 arguments, `a` and `b`
var boundFunc5 = bind(func5, context1, 'foo', 'bar');
  //// should call `func` with a='foo', b='bar', c='baz'
var result7 = boundFunc5('baz');
console.log(`Test8.1: should bind only first and second arguments (in this example) and allow the bound function to take the third - expected foobarbaz and got ${result7}`);

// should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth
var func6 = function(a, b, c, d){ return a + b + c + d };
var boundFunc6 = bind(func6, null, 'foo', 'bar');
var result8 = boundFunc6('biz','baz');
console.log(`Test9.1: should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth - expected foobarbizbaz and got ${result8}`);


// Part II tests!

// should return a function
var rez = func1.bind();
console.log(`Test1.2: should return a function - expected true and got ${typeof rez === 'function'}`);
// should not return the original function
console.log(`Test2.2: should not return the original function - expected true and got ${rez !== func1}`);

// should return a result when calling the bound function
var boundFunk1 = func2.bind(context1, "foobar");
var result9 = boundFunk1();
console.log(`Test3.2: should return a result when calling the bound function - expected foobar and got ${result9}`);

// should call the "curried" function in the bound context
var boundFunk2 = func3.bind(context2)
var result10 = boundFunk2();
console.log(`Test4.2: should call the "curried" function in the bound context - expected true and got ${result10 === context2}`);

// should bind the first argument
var boundFunk3 = func2.bind(context1, 'foo');
var result11 = boundFunk3();
console.log(`Test5.2: should bind the first argument - expected foo and got ${result11}`);

// should allow the bound function to be called multiple times with different arguments
var func7 = function(a){ return a + a };
var boundFunk3 = func7.bind(context1); // fixed to use prototype bind
var result12 = boundFunk3('foo');
var result13 = boundFunk3('bar');
console.log(`Test6.2: should allow the bound function to be called multiple times with different arguments - expected foofoo and got ${result12} - expected barbar and got ${result13}`);

// should bind the first and second arguments
var boundFunk4 = func4.bind(context1, 'foo', 'bar');
var result14 = boundFunk4();
console.log(`Test7.2: should bind the first and second arguments - expected foobar and got ${result14}`);

// should bind only first and second arguments (in this example) and allow the bound function to take the third
var boundFunk5 = func5.bind(context1, 'foo', 'bar');
var result15 = boundFunk5('baz');
console.log(`Test8.2: should bind only first and second arguments (in this example) and allow the bound function to take the third - expected foobarbaz and got ${result15}`);

// should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth
var boundFunk6 = func6.bind(null, 'foo', 'bar');
var result16 = boundFunk6('biz','baz');
console.log(`Test9.2: should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth - expected foobarbizbaz and got ${result16}`);