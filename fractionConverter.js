function fractionConverter (number) {
  // convert to absolute value of input
  let numAbs = Math.abs(number);
  // get preDec by rounding down
  let preDec = Math.floor(numAbs);

  // if number unchanged by above two steps, return it over 1
  if (number === preDec){
    return number + "/1";
  }
  
  // get part of number after decimal
  let postDec = numAbs - preDec;
  // initialize denominator which will be incremented by 1 in while loop
  let denominator = 1;
  // assign current to postDecimal
  let current = postDec;
  
  // while loop will stop when current is an integer
  while (!Number.isInteger(current)) {
    // while postDec is not an integer

    // re-assign current to current + postDec
    // increment current by postDec
    current += postDec;
    // increment denominator by 1
    denominator++;
  }
  
  // calculate numerator by multiplying preDec by denominator and adding current
  let numerator = (preDec * denominator) + current;
  
  // add - symbol if initial input negative
  if (number < 0) {
    numerator = "-" + numerator;
  }
  
  return (numerator + "/" + denominator);
};














// example 2
function fractionConverter (number) {
  let newNumber = number
  let fraction = 1;
  while (newNumber % 1 !== 0) {
    newNumber += number;
    fraction += 1;
  }
  return `${newNumber}/${fraction}`;
}







// example 3
var toFraction = function(number) {
  var reduce = function(numerator, denominator) {
    var lowNum = Math.min(numerator, denominator);
    for (var i = lowNum; i > 0; i--) {
      if ( i > numerator || i > denominator) {
        return [numerator, denominator];
      }
      if ( numerator % i === 0 && denominator % i === 0 ) {
        numerator /= i;
        denominator /= i;
      }
    }
    return [numerator, denominator];
  };

  var isNegative = number < 0;
  var string = number.toString();
  var split = string.split('.');
  if (isNegative) { number = number * -1; }
  var denominator;
  if (split[1]) {
    denominator = Math.pow(10, split[1].length);
  } else {
    denominator = 1;
  }
  var numerator = Math.round(number * denominator);
  return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
};
