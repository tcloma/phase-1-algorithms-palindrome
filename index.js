function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split("")
  let invertWord = []
  let newWord = ""
  splitWord.forEach((element) => {
    invertWord.unshift(element)
  })
  invertWord.forEach((element) => {
    newWord = newWord + element
  })
  if (newWord === word) {
    return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Take a string and seperate each character
  Add each character into an array, placing each element at the start
  Itirate over each element of the array
    Combine them into a string
    Check if the outputed string is the same as the inputed string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
