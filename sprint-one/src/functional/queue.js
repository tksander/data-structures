var Queue = function(){
  var someInstance = {};
  var counter = 0;
  var head = 0;
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
    size++;
  };

  someInstance.dequeue = function(){
    var poppedItem = storage[head];
    console.log(poppedItem);

    delete storage[head];

    head++;

    if (size !== 0) {
     size--;
    }

    // if (counter !== 0) {
    //   counter--;
    // }
    return poppedItem;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
