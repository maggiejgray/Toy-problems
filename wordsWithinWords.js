// Given an array of unique words, 
// find the word that contains the greatest number of other words. 
// A word must be at least two letters long.

function nestedWordCount (wordList) {
  // declare result string to return at the end
  let result = '';
  // declare counter to keep track of highest count found 
  let max = 0;
  
  // iterate through each word in list
  wordList.forEach((string, i) => {
    // declare counter to keep track of successful contains
    let counter = 0;
    // for each word, iterate through all other words in array
    wordList.forEach((substring, j) => {
      // check all except current word
      if (j !== i && string.includes(substring)) {
        // increment counter
        counter++;
      }
    })
    // after inner forEach completes, check if counter is greater than max
    if (counter > max) {
        // re-assign max
        max = counter;
        // assign result to string
        result = string;
      }
  });

  // return result
  return result;
};

// sample inputs for writing tests!:

console.log(`test1: ${nestedWordCount(["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"])}`);
// "antiparty"
console.log(`test2: ${nestedWordCount(["blue", "back", "up", "and", "going", "javascript", "much", "provides", "book", "series", "new", "many", "complete", "background", "years", "necessary", "those", "limited", "sufficiently", "easy", "toward", "mechanisms", "operators", "function", "types", "including", "first", "sufficiently", "easy", "books", "overview", "unicorn", "bear", "bee", "box", "cat", "gorilla", "giant", "gear", "goal", "home", "ache", "fantastic", "exuberant", "ice", "hollow", "happy", "healthy", "homily", "cold", "hot", "yellow", "orange", "green", "complacent", "super", "monster", "bull", "horse", "pig", "another", "one", "to", "test", "you", "guys", "out", "how", "like", "me", "now", "son"])}`);
// "background"
console.log(`test3: ${nestedWordCount(["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"])}`);
// "disrated"
console.log(`test4: ${nestedWordCount(["gray", "grays", "ray", "rays", "strays"])}`);
// "grays"





