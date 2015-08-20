var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // INTERFACE
  var someInstance = {};


  // IMPLEMENTATION
  // storage
  someInstance.storage = {};
  // head
  someInstance.head = 0; 
  // counter (end)
  someInstance.counter = 0;
  // size
  someInstance.currentSize = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {

  // enqueue - add value to end
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.currentSize++;
  },
  // dequeue
  dequeue: function() {
    var dequeuedItem = this.storage[Math.max(0, this.head)];
    delete this.storage[Math.max(0, this.head)];
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


