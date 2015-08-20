var Queue = function() {
  // new queue var
  var newQueue = Object.create(queueMethods);
  // storage
  newQueue.storage = {};
  // current size
  newQueue.currentSize = 0;
  // head
  newQueue.head = 0;
  // current/"end"
  newQueue.currentEnd = 0;

  return newQueue;
};

var queueMethods = {

  // enqueue
  enqueue: function(value) {
    this.storage[this.currentEnd] = value;
    this.currentSize++;
    this.currentEnd++;
  },
  
  // dequeue
  dequeue: function() {
    var dequeuedItem = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    if(this.currentSize > 0) {
      this.currentSize--;
    }
    return dequeuedItem;
  },

  // size
  size: function() {
    return this.currentSize;
  }
};


