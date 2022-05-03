// Assignment code here


// Creating password object
var newPassword = {

  length: 8,
  includeLowercase: true,
  includeUppercase: true,
  includeNumbers: true,
  includeSpecial: true
}

// function to ask user how long the password should be
function getLength() {

  var pwLength = window.prompt("How many characters should the password contain? Enter a number between 8 and 128.");
  newPassword.length = parseInt(pwLength);

  if (newPassword.length < 8 || newPassword.length > 128) {

    window.alert("Please enter a number between 8 and 128");
    return getLength();
  }
  console.log(newPassword.length);
}

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



}

function generatePassword() {

  getLength();
  charTypes();
  
  // switch function to determine set of characters to use
}





// Starter Code Below

// Get references to the #generate element / Tells computer where the button is
// var generateBtn = document.querySelector("#generate");

// Write password in the box
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Run writePassword function when the button is clicked
generate.addEventListener("click", generatePassword); // !!!change to writePassword at the end!!!




