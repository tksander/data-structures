var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var prevNode = list.tail;
    // get a new node and store the passed value
    var nodeResult = Node(value);
    // add the node to the list object, set the key to the node result
    list[nodeResult] = nodeResult;
    // set the previous tail's next to the most recently added node
    list.tail = list[nodeResult];
    // reset tail to the most recently added node

    if (list.head === null) {
      list.head = list[nodeResult];
    }

    // set node.next
    if (prevNode !== null) {
      prevNode.next = list[nodeResult];
    }
  };

  list.removeHead = function(){
    // save down copy of head 
    var prevHead = list.head;
    // save down the value of previous Head
    var prevHeadValue = list.head.value;
    // change value of list.head to the value of prevHead.next
    list.head = prevHead.next;
    // delete the head
    delete prevHead;
    // return the value
    return prevHeadValue;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === target) {
      return true;
    }
    return false;  
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
