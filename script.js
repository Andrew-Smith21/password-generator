// Assignment code here


function passwordLength() {

  var pwLength = window.prompt("How many characters long should the password be? Enter a number from 8 to 128.");

}




// Starter Code Below

// Get references to the #generate element / Tells computer where the button is
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  window.prompt("Test");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Run writePassword function when the button is clicked
generateBtn.addEventListener("click", writePassword());




