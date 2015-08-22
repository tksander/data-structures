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
  var initialNode = this;

  var childBST = BinarySearchTree(value);

  var recurse = function(node) {

    // if less:
    if (value < node.value) {
      if (node.left === null) {  // if left is null:
        // insert child into .left
        node.left = childBST;
      } else {  // if left is not null:
        // recursively call recurse(), comparing "value" to value of left-hand node
        recurse(node.left);
      }

    // if greater:
    } else if (value > node.value) {
      if (node.right === null) {  // if right is null:
        // insert child into .right
        node.right = childBST;
      } else { // if right is not null:
       // recursively call recurse(), comparing "value" to value of right-hand node
       recurse(node.right);
      }
    }
  };

  recurse(initialNode);
};

bstMethods.contains = function(target) {
  var initialNode = this;
  var found = false;

  var recurse = function(node) {

    if(target === node.value) {
      found = true;
    } else if (target < node.value) {
        if (node.left !== null) {  
          recurse(node.left);
        }
    } else if (target > node.value) {
        if (node.right !== null) {  
         recurse(node.right);
        }
    } 
  };

  recurse(initialNode);
  return found;
};


bstMethods.depthFirstLog = function(callback) {
  var initialNode = this;

  var recurse = function(node) {
    // apply callback to current node value
    callback(node.value);

    // if node.left not null, recurse over node.left
    if (node.left !== null) {
      recurse(node.left);
    }

    // if node.right not null, recurse over node.right
    if (node.right !== null) {
      recurse(node.right);
    }
  };

  recurse(initialNode);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
