// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// starting promt

var startq= prompt("how mamy characters would you like your password to contain? please enter a integer between 8-128");
if (startq==null) {
  alert("thats a shame, please refresh the page to restart")
}else 
//   startq = Number(startq);
//   if (startq < 8 || startq > 128) {
//     alert("The number chosen is not within the valid range (8-128). Please refresh and try again.");

//     var specialcharactersQ=confirm("do you want special characters?");
//     if(specialcharactersQtrue) {
//       alert("special character added")
//   }
//   };

// }


function  d(){}
// // special characters
// var specialcharactersQ=confirm("do you want special characters?");
// if (specialcharactersQ==true) {
//   alert("special character added");

// }else if (specialcharactersQ==false)alert("special character not added");
// else
// // lower case character
// var lowercase= confirm("do you want lower case characters?")
// if(lowercase==true){
//     alert("lower case added")
// }else if(lowercase==false){
//   alert("lower case not added")
// }




// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {
Math.floor(math.random(arr))
}
// Function to generate password with user input
function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
