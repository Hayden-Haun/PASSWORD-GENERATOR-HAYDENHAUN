//PREWRITTEN CODE -------------------
// Assign button to query selector
var generateBtn = document.querySelector("#generate");
//PREWRITTEN CODE -------------------

//Create arrays for specialChars, lowerCase, upperCase
var specialChars = "!#$%&()*+,-./:;<=?@[]^_{|}~".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberCharacters = "0123456789".split("");
var userChoiceArray;
var didUserSelect;

var passwordCharCount;
var booSpecial;
var booLower;
var booUpper;
var booNumbers;

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); //make sure that the page does not refresh when button is clicked
  userChoiceArray = [];

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//MAIN FUNCTION. IF STATEMENT MAKES SURE THAT USER SELECTS AT LEAST ONE OPTION
function generatePassword() {
  didUserSelect = false;
  passwordCharCount = getLength();
  booSpecial = getSpecial();
  booLower = getLower();
  booUpper = getUpper();
  booNumbers = getNumber();

  if (didUserSelect) {
    var result = mainCreateFunction();
    return result;
  } else {
    alert(
      "NO OPTION SELECTED. PLEASE PRESS BUTTON AGAIN AND CHOOSE AT LEAST ONCE OPTION"
    );
  }
}

//DECLARE FUNCTION TO GET LENGTH OF PASSWORD. IF/ELSE STATEMENT TO MAKE SURE LENGTH MEETS REQUIREMENTS
function getLength() {
  var validLength = false;

  do {
    var numberChars = prompt(
      "Please provide the number of characters in your password (must be between 8 and 128 characters)."
    );
    if (numberChars > 128 || numberChars < 8) {
      alert("NOT A VALID LENGTH");
      validLength = false;
    } else {
      validLength = true;
    }
  } while (!validLength);

  return numberChars;
}

//USER SELECTS WHETHER THEY WANT SPECIAL CHARS OR NOT
function getSpecial() {
  var specialSelection = confirm(
    "Do you want SPECIAL CHARACTERS in your password?"
  );
  if (specialSelection) {
    didUserSelect = true;
  }
  return specialSelection;
}

//USER SELECTS WHETHER THEY WANT LOWER CHARS OR NOT
function getLower() {
  var lowerSelection = confirm(
    "Do you want LOWER-CASE LETTERS in your password?"
  );
  if (lowerSelection) {
    didUserSelect = true;
  }
  return lowerSelection;
}

//USER SELECTS WHETHER THEY WANT UPPER CHARS OR NOT
function getUpper() {
  var upperSelection = confirm(
    "Do you want UPPER-CASE LETTERS in your password?"
  );
  if (upperSelection) {
    didUserSelect = true;
  }
  return upperSelection;
}

//USER SELECTS WHETHER THEY WANT NUMBERS OR NOT
function getNumber() {
  var numberSelection = confirm("Do you want NUMBERS in your password?");
  if (numberSelection) {
    didUserSelect = true;
  }
  return numberSelection;
}

//FUNCTION CREATES AN ARRAY BASED ON USER SELECTIONS OF ALL VALID CHARACTERS TO ADD TO PASSWORD
//FOR LOOP ITERATES THROUGH BASED ON THE USER SELECTED PASSWORD LENGTH, AND ADDS CHARACTERS AT RANDOM TO PASSWORD.
function mainCreateFunction() {
  if (booNumbers) {
    userChoiceArray = userChoiceArray.concat(numberCharacters);
  }

  if (booSpecial) {
    userChoiceArray = userChoiceArray.concat(specialChars);
  }

  if (booLower) {
    userChoiceArray = userChoiceArray.concat(lowerCase);
  }

  if (booUpper) {
    userChoiceArray = userChoiceArray.concat(upperCase);
  }

  //DECLARE LOCAL VARIABLE PASSWORD
  var passwordGen = "";
  for (var i = 0; i < passwordCharCount; i++) {
    var randomChar = Math.floor(Math.random() * userChoiceArray.length);
    passwordGen += userChoiceArray[randomChar];
    //console.log(passwordGen);
  }
  return passwordGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
