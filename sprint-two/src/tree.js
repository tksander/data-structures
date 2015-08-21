var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // add treemethods functionality to newTree
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // instatiate new Tree object
  var newChild = Tree(value);
  // push new Tree object onto children property of calling object
  this.children.push(newChild); 
};

treeMethods.contains = function(target){
  var initialNode = this;
  console.log(initialNode);
  var found = false;

  function recurse(node) {
    // if the current child.value === target -> return true
    if (node.value === target) {
      found = true;
    }

    // if current node has children in its array
    if (node.children.length) {
      // loop over of the children
      _.each(node.children, function(child) { 
        recurse(child);
      });
    }
  }
  recurse(initialNode);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
