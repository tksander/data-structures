var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // storage
  this.storage = {};
  // counter/end
  this.counter = 0;
  // head
  this.head = 0;
  // current size
  this.currentSize = 0;
};

Queue.prototype = {
  // enqueue
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.currentSize++;
    this.counter++;
  },
  // dequeue
  dequeue: function() {
    var dequeuedItem = this.storage[this.head];
    delete this.storage[this.head];
    if (this.currentSize > 0) {
      this.currentSize--;
    }
    this.head++;
    return dequeuedItem;
  },
  // size
  size: function() {
    return this.currentSize;
  },
  // constructor
  constructor: Queue
};