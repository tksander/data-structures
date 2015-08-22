// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the advanced section, your sets should handle only string values.
// Note: This is a rather simple data structure. Take a look at the Wikipedia) entry. Which native Javascript type fits the requirements best?

var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){
  this._storage.push(string);
};

setPrototype.contains = function(targetString){
  var result = false;
  _.each(this._storage, function(value) {
    if(value === targetString) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(removedString){
  var stringIndex = this._storage.indexOf(removedString);
  this._storage[stringIndex] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
