var Stack = function(){
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    var poppedItem = storage[counter-1];
    delete storage[counter-1];
    if (counter !== 0) {
     counter--;
    }
    return poppedItem;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};