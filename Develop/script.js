// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){ //generatePassword function was not originally defined
  var length = +lengthEl.value; // This verifies length of password in input field. The + ensures it's logged as a number, not a string
  var isUpper = upperEl.checked; // .checked tells us if the box has been checked or not, returning a boolean value of true or false repectively
  var isLower = lowerEl.checked;
  var isNumbers = numbersEl.checked;
  var isSymbols = symbolsEl.checked;
  
  // console.log(isUpper, isLower, isNumbers, isSymbols, length); //Test to verify that console reads boolean values when generate password button is clicked
  // This also logs undefined to the output, we're getting there
  // cardEl.innerText = validatePassword(isUpper, isLower, isNumbers, isSymbols, length);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*Placed specific elements into variables. Created these to make a more concise function, 
otherwise the above generatePassword function would be much longer*/
var cardEl = document.getElementById("card-body"); // Output for pw
var lengthEl = document.getElementById("length"); // Retrieves length of the pw as defined by user
var upperEl = document.getElementById("uppercase"); // Below retrieves check boxes for prompts
var lowerEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");

//Created a global object that pulls each random function
//This allows us to call one of the 4 random function in a more concise way
var random = {
  upper: randomUpper(),
  lower: randomLower(),
  number: randomNumber(),
  symbol: randomSymbol()
};

// console.log(random.lower); // Test random object
// console.log(random.upper); // Test random object

//Random letters, numbers, and symbols functions
function randomLower() { //Returns random lowercase letter
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz"
  return alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
};
// console.log(randomLower()); //Test of lowercase

function randomUpper() { //Returns random uppercase letter
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
};
// console.log(randomUpper()); //Test of uppercase

function randomNumber(){ //Returns random number between 0-9
  return Math.floor(Math.random() * 10);
};

// console.log(randomNumber()); //Test of number

function randomSymbol() { //Pulls random special character
  var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)]
};

// console.log(randomSymbol()); //Test of symbol