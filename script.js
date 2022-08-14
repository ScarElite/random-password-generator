// Assignment code here
function generatePassword() {
  var promptPassword = window.prompt("How long do you want your password to be? Your password must be between 8 and 128 characters long.")
  var passwordLength = parseInt(promptPassword);

  if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  if (passwordLength != parseInt(passwordLength)) {
    window.alert("You need to provide a numeric value! Please try again.");
    return generatePassword();
  } else {
    console.log("You picked a numeric value!");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
