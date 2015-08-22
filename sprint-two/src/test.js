var bst1 = BinarySearchTree(2000);

  for (var i = 0; i < 2000; i++) {
    var randomNum = Math.round(Math.random() * 2000);
    bst1.insert(randomNum);
  }

   for (var i = 0; i < 20; i++) {
    var randomNum = Math.round(Math.random() * 2000);
    bst1.contains(randomNum);
  }

  var array = [];
  var func = function(value){ array.push(value); };
  bst1.depthFirstLog(func);
  console.log(array);


