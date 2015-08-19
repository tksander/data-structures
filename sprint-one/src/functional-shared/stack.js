var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  _.extend(someInstance, stackMethods);
  var counter = 0;

};

var stackMethods = {
  push: function(value) {
    storage[counter] = value;
    counter++;
  },

  pop: function() {
    var poppedItem = storage[counter-1];
    delete storage[counter-1];
  },

  size: function() {
    console.log(counter);
    return counter;
  },

// return someInstance;
};


