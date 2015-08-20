// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  
  _.extend(someInstance, stackMethods);   
  return someInstance;
};

var stackMethods = {
  push: function(value) {          
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    var poppedItem;
      var poppedItem = this.storage[Math.max(0, this.counter-1)];
        delete this.storage[Math.max(0, this.counter-1)];
        if (this.counter > 0) {
          this.counter--;
        }
    return poppedItem;
  },

  size: function() {
    return this.counter;
  }
};


