// * IMPLEMENT STACK USING QUEUE * 

// Queue constructor is already created
var Queue = function() {
  this.storage = [];
};

Queue.prototype.enqueue = function(value) {
  this.storage.push(value);
};

Queue.prototype.dequeue = function() {
  let removed = this.storage.shift();

  return removed;
};

Queue.prototype.size = function() {
  return this.storage.length;
};

// var newQ = new Queue();

// newQ.enqueue(1);
// newQ.enqueue(2);
// newQ.dequeue();
// newQ.enqueue(3);
// newQ.enqueue(4);
// console.log('newQ.size1:', newQ.size()); // 3
// console.log('newQ.dQ:', newQ.dequeue()); // 2
// console.log('newQ.dQ2:', newQ.dequeue()); // 3
// console.log('newQ.dQ3:', newQ.dequeue()); // 4
// console.log('newQ.size:', newQ.size()); // 0

////////////////////////////////////////////

// implement Stack using only Queue and Queue methods
var Stack = function() {
  // declare two instances of Queue
  this.q1 = new Queue();
  this.q2 = new Queue();
};

// should push value to the top of the stack
Stack.prototype.push = function(value) {
  // use enqueue method on q1
  this.q1.enqueue(value);
};

Stack.prototype.pop = function() {
  // move everything but last item to q2
  while(this.q1.size() > 1) {
    this.q2.enqueue(this.q1.dequeue())
  }
  // save only remaining value in q1
  let popped = this.q1.dequeue();
  // q1 now empty

  // swap q1 and q2 assignments to always keep Queue items in q1
  // console.log('this.q1 before:', this.q1);
  // console.log('this.q2 before:', this.q2);
  [this.q1, this.q2] = [this.q2, this.q1];
  // console.log('this.q1 after:', this.q1);
  // console.log('this.q2 after:', this.q2);
  
  // return popped value
  return popped;
};

Stack.prototype.size = function() {
  // q1 always has the size of the Queue
  return this.q1.size();
};


// var newS = new Stack();

// newS.push(1);
// newS.push(2);
// newS.pop();
// newS.push(3);
// newS.push(4);
// newS.pop();
// console.log('newS.size():', newS.size()); // 2
// console.log('newS.pop()1:', newS.pop()); // 3
// console.log('newS.pop()2:', newS.pop()); // 1
