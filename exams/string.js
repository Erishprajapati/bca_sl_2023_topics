let myString = "Hello, JavaScript!";

// Displaying the original string
console.log("Original String:", myString);

// Finding the length of the string
let stringLength = myString.length;
console.log("Length of the String:", stringLength);

// Converting the string to uppercase
let upperCaseString = myString.toUpperCase();
console.log("Uppercase String:", upperCaseString);

// Converting the string to lowercase
let lowerCaseString = myString.toLowerCase();
console.log("Lowercase String:", lowerCaseString);

// Extracting a substring
let substring = myString.substring(7, 16);
console.log("Substring:", substring);

// Splitting the string into an array
let words = myString.split(" ");
console.log("Array of Words:", words);

// Finding the index of a substring
let indexOfSubstring = myString.indexOf("JavaScript");
console.log("Index of 'JavaScript':", indexOfSubstring);

// Finding the last index of a character
let lastIndexOfCharacter = myString.lastIndexOf("a");
console.log("Last Index of 'a':", lastIndexOfCharacter);
