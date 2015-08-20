// Do:
// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Don't:
// Declare the instance explicitly
// Return the instance explicitly

var Stack = function() {
  // storage
  this.storage = {};
  // counter
  this.counter = 0;  
};


Stack.prototype = {
  // push
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }, 
  // pop
  pop: function() {
    var poppedItem = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    if(this.counter > 0) {
      this.counter--;
    }
    return poppedItem;
  },
  // size
  size: function() {
    return this.counter;
  },

 constructor: Stack
};

// Stack.prototype.constructor = Stack;  (Alternative way to add the constructor)
