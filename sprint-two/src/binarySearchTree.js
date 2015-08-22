var BinarySearchTree = function(value){

   var newBST = {};

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  _.extend(newBST, bstMethods);
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var childBST = BinarySearchTree(value);

    // if less:
    if (value < this.value) {
      if (this.left === null) {  // if left is null:
        // insert child into .left
        this.left = childBST;
      } else {  // if left is not null:
        // recursively call this.insert(), comparing "value" to value of left-hand this
        this.left.insert(value);
      }

    // if greater:
    } else if (value > this.value) {
      if (this.right === null) {  // if right is null:
        // insert child into .right
        this.right = childBST;
      } else { // if right is not null:
       // recursively call this.insert(), comparing "value" to value of right-hand this
       this.right.insert(value);
      }
    }
};

bstMethods.contains = function(target) {
  var found = false;

  if(target === this.value) {
    found = true;
  } else if (target < this.value) {
      if (this.left !== null) {  
       found = this.left.contains(target);
      }
  } else if (target > this.value) {
      if (this.right !== null) {  
       found = this.right.contains(target);
      }
  } 
  return found;
};


bstMethods.depthFirstLog = function(callback, currentNode) {
  currentNode = currentNode || this;

  // apply callback to current node value
  callback(currentNode.value);

  // if currentNode.left not null, recurse over currentNode.left
  if (currentNode.left !== null) {
    currentNode.depthFirstLog(callback, currentNode.left);
  }

  // if currentNode.right not null, recurse over currentNode.right
  if (currentNode.right !== null) {
    currentNode.depthFirstLog(callback, currentNode.right);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
