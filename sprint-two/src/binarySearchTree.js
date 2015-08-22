var BinarySearchTree = function(value){

   var newBST = {};

  newBST.left = [];
  newBST.right = [];

  // add treemethods functionality to newBST
  _.extend(newBST, bstMethods);
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {

  // if value < current node

  // if value > node

};
bstMethods.contains = function() {};
bstMethods.left = function() {};
bstMethods.depthFirstLog = function() {};




/*
 * Complexity: What is the time complexity of the above functions?
 */
