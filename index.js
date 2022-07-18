function isPalindrome(word) {
  // Write your algorithm here
  const newWord = word.split("").reverse().join("")
  
  return newWord === word
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
  I used the split() method with a parameter of "" string method to seperate each character of a given string
  into an array called splitWord. I then itirated over the array and placed each element in a new array called
  invertedWord, using unshift() to flip the array backwards. I itirated over the invertedWord array and added
  each element into an empty string variable called newWord. I used an if statement to check if newWord has the
  exact same value as the original given string
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
