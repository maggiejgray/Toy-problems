var Stack = function() {
  var storage = [];

  this.push = function(item){
    storage.push(item);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {
  // declare stack instance for inbox and outbox
  var inbox = new Stack();
  var outbox = new Stack();

  // enqueue method: push new item to inbox stack
  this.enqueue = function(item){
    inbox.push(item);
  };

  // dequeue method
  this.dequeue = function(){
    // first, add all items from inbox to outbox (reverse order)
    while (inbox.size() > 0) {
      outbox.push(inbox.pop());
    }
    
    // save last item in outbox (first in inbox), item to dequeue
    let item = outbox.pop();
    
    // add the rest of the items back into inbox
    while (outbox.size() > 0) {
      inbox.push(outbox.pop())
    }
    
    // return dequeued item
    return item;
  };

  // inbox is always has the actual size of the queue
  this.size = function(){
    return inbox.size();
  };
};
