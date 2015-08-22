var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // build a tuple
  var tuple = [k, v];
  // determine whether any value currently exists at index[i] - assign to var
  var currentIndexValue = this._storage.get(i);
  // iterate over currentIndexValue to determine if it already contains a tuple with key 'k'

  // Intialize the tuples bucket
   if(currentIndexValue === undefined) {
    // set value for index as an array that contains a tuple
    this._storage.set(i, [tuple]);
  }

  if(currentIndexValue !== undefined) {
    var matchedTupleIndex = _.findIndex(currentIndexValue, function(tuple) {
        // find array[0] that matches argument k
        return tuple[0] === k;
    });


    if(matchedTupleIndex !== -1) { // if a tuple at hash index contains key, overwrite tuple value
      currentIndexValue[matchedTupleIndex][1] = v;
      this._storage.set(i, currentIndexValue);
    } else { // else push tuple onto array at current index
      currentIndexValue.push(tuple);
      this._storage.set(i, currentIndexValue);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  // pass in the string => get back the hashed index
  var i = getIndexBelowMaxForKey(k, this._limit);
  // use that index to get the array of tuples
  var retrievedTupleArray = this._storage.get(i);
  // iterate over the tuples in the array
  var matchedTuple = _.find(retrievedTupleArray, function(tuple) {
      // find array[0] that matches argument k
      return tuple[0] === k;
  });
  return matchedTuple[1];
};

HashTable.prototype.remove = function(k){
  var hashIndex = getIndexBelowMaxForKey(k, this._limit);
  var currentIndexValue = this._storage.get(hashIndex);
  var matchedTupleIndex = _.findIndex(currentIndexValue, function(tuple) {
    // find array[0] that matches argument k
    return tuple[0] === k;
  });
  currentIndexValue[matchedTupleIndex][1] = null;

  this._storage.set(hashIndex,currentIndexValue);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
