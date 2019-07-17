// inputs: n - number
// outputs: number of iguanas after n months

nthFibonacci = function(n) {
  // save initial two numbers in sequence
  const sequence = [0, 1];
  // if n is 0 or 1
  if (n === 0 || n === 1) {
    // return n
    return n;
    // else iterate from 2 to n, step by 1
  } else {
    for (let i = 2; i <= n; i++) {
      // calculate next number by adding previous two
      let next = sequence[i - 2] + sequence[i - 1];
      // push to sequence
      sequence.push(next);
    }
  }
  // return last item in sequence
  return sequence.pop();
};
