
var makeHashTable = function(){
  // result is the hash table instance that has insert, remove, and retrieve methods
  var result = {};
  // storage is the outermost array that will contain storageLimit amount of buckets
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

//***Finish This Function***//  
// resize takes in newSize and resizes on insertion and removal
// it is already being called in result.insert and result.remove
// resize does not return anything it just handles resizing hash table

  // inputs: newSize - will be new storageLimit
  function resize(newSize){
    // your code here!
    // set resizing to true while this function is running
    resizing = true;
    // re-assign storagelimit to newSize
    storageLimit = newSize;
    
    // create reference to old storage, use spread operator to access all key, value pairs
    const oldStorage = storage;
    // re-assign storage to array of newSize create new storage that is newSize
    storage = new Array(newSize);
    // reset current size to 0 because we just emptied storage
    size = 0;
    
    // iterate through oldStorage and re-insert items from old storage into new storage
    oldStorage.forEach((item) => {
      // check if bucket is defined
      if (item) {
        // if it is, iterate through it
        item.forEach((tuple) => {
          // for each tuple, call insert method
          result.insert(tuple[0], tuple[1]);
        });
      }
    });
    
    // reset resizing to false 
    resizing = false;
  }
  
//*************************//  
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };
  
  //This next function you would never have for a hash table
  //It is here merely for testing purposes. So we can check that 
  //you are resizing correctly
  result.find = function(index){
    //return the bucket at a given index
    return storage[index];
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


//////// TESTS //////////
const tester = function() {
  var hashTable = makeHashTable();
        
  var id = 0, diffs = [];
  var endTime, startTime, key;

  for(var i = 0; i <= 10; i++){
    for(var j = 0; j < 1000; j++){
      key = 'userid:' + (id++);
      hashTable.insert(key, 'hocus pocus');
    }
  }
  
  //select 10 random keys and make sure that they are in the correct
  //place in the hash table
  for(var i = 0; i<10; i++){
    var found = false;
    var place = Math.floor(Math.random()*11000); //since we added about
    //11,000 items in the functionality at beginning 
    var str = 'userid:' + place;
    var supposedIndex = getIndexBelowMaxForKey (str, 16384);
    var bucket = hashTable.find(supposedIndex);
    for(var z = 0; bucket && z<bucket.length; z++){
      if(bucket[z][0] == str){
        found = true;
      }
    }
    return found;
  }
};

console.log('tester:', tester());

