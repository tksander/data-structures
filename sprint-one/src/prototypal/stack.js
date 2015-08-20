// Do:
// Use Object.create with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new

var Stack = function() {
  
  // interface instance to pass back - use object.create
  var newStack = Object.create(stackMethods);
  // storage object
  newStack.storage = {};
  // counter
  newStack.counter = 0; 
  
  return newStack;
};

// use this to allow function instantiations to pass obj to interface
var stackMethods = {

  // push
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  // pop
  pop: function() {
    var poppedItem = this.storage[this.counter-1];
    delete this.storage[this.counter-1];
    if (this.counter > 0) {
      this.counter--;
    }
    return poppedItem;
  },
  // size
  size: function() {
    return this.counter;
  }
};