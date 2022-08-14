// Assignment code here

// Generate random password
function generatePassword() {
  // Asks the user to input how long they want their password to be
  var promptPassword = window.prompt("How long do you want your password to be? Your password must be between 8 and 128 characters long.")
  // Takes the user's input and turns it into a number
  var passwordLength = parseInt(promptPassword);

  // If the user enters in a blank response or a null response then a window alert will pop up telling them to provide a valid answer and return them to the beginning of the function
  if (promptPassword === "" || promptPassword === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  // If the user did not enter in a value between 8 and 128 then a window alert will pop up telling them they need to enter in a valid length and will return them to the beginning of the function
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

  // Asks the user if they would like to include this character type into their password
  var confirmLowerCase = window.confirm("Would you like your password to include a lowercase?");
  var confirmUpperCase = window.confirm("Would you like your password to include an uppercase?");
  var confirmNumber = window.confirm("Would you like your password to include a number?");
  var confirmSpecial = window.confirm("Would you like your password to include a special character?");

  // Arrays of possible characters within the different character types
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const special = [".", ",", ":", "?", "=", "-", "(", ")", "/", "%", "@", "!", "&", "$", "#", "*",];

  // Assigns the arrays the user chose to single characterTypes arrays
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

  // If the user did not choose a character type then a window alert will pop up letting them know they need to choose at least one and will return them to the beginning of the function
  if (characterTypes.length === 0) {
    window.alert("Your password must include at least one type of character! Please try again.");
    return generatePassword();
  }

  // Merges the nested arrays into a single array that can be used for the password
  var mergeArrays = [].concat.apply([], characterTypes);

  // Generates the random password from mergeArrays
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
