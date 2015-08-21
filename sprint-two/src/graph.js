// vertex indexed array of arrays to store edges

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  // adjacency list - array storing vertices' relationships with other vertices
  this.adjacencyList = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeValue){
  this.adjacencyList[nodeValue] = [nodeValue, {nodeValue: nodeValue}];


};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  // iterate over adjacency list 
  if (this.adjacencyList.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  // temp variable containing node to be removed
  var nodeToRemove = node;
  // iterate over keys of object containing connected nodes
  var edgeList = this.adjacencyList[nodeToRemove][1];

  // remove "node" from the connected nodes' list of edges
  _.each(edgeList, function(value, key, edgeList) {
    if (value === nodeToRemove) {
      delete edgeList[key];
    }
  });
  // remove the passed in "node" itself
  delete this.adjacencyList[nodeToRemove];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  // if 
  if(this.adjacencyList[fromNode][1][toNode]) {
    if(this.adjacencyList[toNode][1][fromNode]) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.adjacencyList[fromNode][1][toNode] = toNode;
  this.adjacencyList[toNode][1][fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.adjacencyList[toNode][1][fromNode];
  delete this.adjacencyList[fromNode][1][toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){

  // iterate over the adjacencyList
  _.each(this.adjacencyList, function(value){
    // apply cb([0])
    cb(value[0]);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



