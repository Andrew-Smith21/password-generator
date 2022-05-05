// Assignment code here

// Special characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// Lowercase characters abcdefghijklmnopqrstuvwxyz
// Uppercase characters ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Numerical characters 0123456789

// Creating password placeholder

var result = "";

// Creating password object
var newPassword = {

  length: 8,
  includeLowercase: true,
  includeUppercase: true,
  includeNumbers: true,
  includeSpecial: true
}

// Creating all-inclusive character bank
var charBank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// function to ask user how long the password should be
function getLength() {

  var pwLength = window.prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  newPassword.length = parseInt(pwLength);

  if (newPassword.length < 8 || newPassword.length > 128) {

    window.alert("Please enter a number between 8 and 128");
    return getLength();
  }
  console.log(newPassword.length);
} // end of function getLength

// function to ask user what types of characters to include in the password
function charTypes() {

  newPassword.includeLowercase = window.confirm("Should the password contain lowercase characters? Click OK for yes, Cancel for no.");
  console.log(newPassword.includeLowercase);

  newPassword.includeUppercase = window.confirm("Should the password contain uppercase characters? Click OK for yes, Cancel for no.");
  console.log(newPassword.includeUppercase);

  newPassword.includeNumbers = window.confirm("Should the password contain numbers? Click OK for yes, Cancel for no.");
  console.log(newPassword.includeNumbers);

  newPassword.includeSpecial= window.confirm("Should the password contain special characters? Click OK for yes, Cancel for no.");
  console.log(newPassword.includeSpecial);

  // ensure that at least one character type is selected
  if (newPassword.includeLowercase === false && newPassword.includeUppercase === false && newPassword.includeNumbers === false && newPassword.includeSpecial === false) {
    window.alert("Please choose at least one character type.");
    return charTypes();
  }
} // end of function charTypes

function makeThePassword(length) {

  // switch function to determine value of charBank

  var result = "";
  var charBankLength = charBank.length;
  console.log(newPassword.length);

  for ( var i = 0; i < length; i++ ) {

    result += charBank.charAt(Math.floor(Math.random() * charBankLength));
  }
  console.log(result);
} // end of makeThePassword function

function generatePassword() {

  getLength();
  charTypes();
  makeThePassword(newPassword.length);
}


// Starter Code Below

// Get references to the #generate element / Tells computer where the button is
// var generateBtn = document.querySelector("#generate");

// Write password in the box
function writePassword() {

  generatePassword();
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result;

}

// Run writePassword function when the button is clicked
generate.addEventListener("click", writePassword); // !!!change to writePassword at the end!!!
