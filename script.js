// Assignment code here
function generatePassword() {
  var promptPassword = window.prompt("How long do you want your password to be? Your password must be between 8 and 128 characters long.")
  var passwordLength = parseInt(promptPassword);

  if (promptPassword === "" || promptPassword === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  if (promptPassword.valueOf() < 8 || promptPassword.valueOf() > 128) {
    window.alert("The length of your password must be between 8 and 128 characters.");
    return generatePassword();
  } else if (promptPassword.valueOf() >= 8 && promptPassword.valueOf() <= 128) {
    console.log("You have picked a valid password length.");
  }

  if (promptPassword != parseInt(promptPassword)) {
    window.alert("You need to provide a numeric value! Please try again.");
    return generatePassword();
  } else {
    console.log("You picked a numeric value!");
  }

  var confirmLowerCase = window.confirm("Would you like your password to include a lowercase?");
  var confirmUpperCase = window.confirm("Would you like your password to include an uppercase?");
  var confirmNumber = window.confirm("Would you like your password to include a number?");
  var confirmSpecial = window.confirm("Would you like your password to include a special character?");

  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const special = [".", ",", ":", "?", "=", "-", "(", ")", "/", "%", "@", "!", "&", "$", "#", "*",];

  var characterTypes = [];

  if (confirmLowerCase) {
    characterTypes.push(lowerCase);
  }

  if (confirmUpperCase) {
    characterTypes.push(upperCase);
  }

  if (confirmNumber) {
    characterTypes.push(numbers);
  }

  if (confirmSpecial) {
    characterTypes.push(special);
  }

  if (characterTypes.length === 0) {
    window.alert("Your password must include at least one type of character! Please try again.");
    return generatePassword();
  }

  var mergeArrays = [].concat.apply([], characterTypes);

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * mergeArrays.length);
    password = password + mergeArrays[randomNumber];
  }

  return password;
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
