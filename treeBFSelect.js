// A resource on breadth first tree traversal
// https://www.cs.bu.edu/teaching/c/tree/breadth-first/

// You have a Queue constructor to help implement BFSelect
var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};
////////////////////////////////////////////////////////////


var Tree = function(value){
  this.value = value;
  this.children = [];
};

// first problem, how to use queue to traverse in breadth first?
// then, how to keep track of depth of each node we visit to pass to filter
// 

Tree.prototype.BFSelect = function(filter) {
  // declare new queue to store and remove nodes in correct order
  const queue = new Queue();
  // declare array to add node values that pass filter
  const result = [];
  
  // add root node to queue as object with depth key
  queue.enqueue({node: this, depth: 0});
  
  // set temp variable equal to the obj that was enqueued
  let curr = queue.dequeue();
  
  // use while loop to iterate as long as still items to dequeue
  while (curr) {
    // save value and depth in variables to pass to filter
    let value = curr.node.value;
    let depth = curr.depth;
    // if item passes filter, push into result array
    if (filter(value, depth)) {
      result.push(value);
    }
    // iterate through nodes children and enqueue
    node.children.forEach((child) => {
      // add all children to queue in same format; increment depth
      queue.enqueue({node: child, depth: depth + 1})
    });
    // re-assign curr to next item in queue
    curr = queue.dequeue();
  }
  // return flat array containing filtered node values
  return result;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

/////////////////////////////////////////////////////////////////
// SAMPLE TEST CASES
var root1 = new Tree(1); // depth 0
var branch2 = root1.addChild(2); // depth 1
var branch3 = root1.addChild(3); // depth 1
var leaf4 = branch2.addChild(4); // depth 2
var leaf5 = branch2.addChild(5); // depth 2
var leaf6 = branch3.addChild(6); // depth 2
var leaf7 = branch3.addChild(7); // depth 2

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]