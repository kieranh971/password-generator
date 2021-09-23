// Assignment Code
var generateBtn = document.querySelector("#generate");

// Empty global variables to start with
var input;
var NumberPrompt;
var UppercasePrompt;
var LowercasePrompt;
var SymbolPrompt;

// All characters to be used in random password: special characters, numbers, upper and lower case letters
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Actual password generation
var options; // Going to use this to store answers to confirmation prompts

function generatePassword () { // This was originally undefined, going to define the function here
  input = prompt("Please choose password length between 8-128"); //Inital prompt when hitting button
  if (input < 8 || input > 128){ //pw must be between 8 and 128
    input = alert("Only enter numbers between 8-128.");
    } else { // Use confirm here to store boolean value of true or false. Use for if else loops after this
    NumberPrompt = confirm("Would you like this password to contain numbers?"); // confirms if user wants numbers or not
    UppercasePrompt = confirm("Would you like this password to contain capital letters?"); // confirms if user wants uppercase or not
    LowercasePrompt = confirm("Would you like this password to contain lowercase letters?"); // confirms if user wants lowercase or not
    SymbolPrompt = confirm("Would you like this password to contain special symbols (!?@#$ etc.)?"); // confirms if user wants special characters or not
    };
  // Use if else loops for all possible outcomes (i.e. if user does or does not want all possible combinations for password)
    if (!NumberPrompt && !UppercasePrompt && !LowercasePrompt && !SymbolPrompt) { // If user chooses no options, they need to start again
      options = alert("Invalid password criteria, please enter valid password length or confirm at least one option");
      // If user chooses all 4 options
    } else if (NumberPrompt && UppercasePrompt && LowercasePrompt && SymbolPrompt) {
      options = numbers.concat(UpperCase, LowerCase, symbols); //Use concat to merge all array combinations
      // console.log(options); // Test, combines all arrays

      //Next section is for only 3 options selected
      // Possible options (4): number, upper, lower; number, upper, symbol; number, lower, symbol; upper, lower, symbol
    } else if (NumberPrompt && UppercasePrompt && LowercasePrompt) {
      options = numbers.concat(UpperCase, LowerCase);
      // console.log(options); // Test, make sure only 3 arrays are combined
    } else if (NumberPrompt && UppercasePrompt && SymbolPrompt) {
      options = numbers.concat(UpperCase, symbols);
    } else if (NumberPrompt && LowercasePrompt && SymbolPrompt) {
      options = numbers.concat(LowerCase, symbols);
    } else if (UppercasePrompt && LowercasePrompt && SymbolPrompt) {
      options = UpperCase.concat(LowerCase, symbols);
    } 
        //Next section is for only 2 options selected
        //Possible options (6): number, upper; number, lower; number, symbol; lower, upper; lower, symbol; upper, symbol
        else if (NumberPrompt && UppercasePrompt) {
          options = numbers.concat(UpperCase);
          // console.log(options); // Test, make sure only 2 arrays are combined
        }
        else if (NumberPrompt && LowercasePrompt) {
          options = numbers.concat(LowerCase);
        }
        else if (NumberPrompt && SymbolPrompt) {
          options = numbers.concat(symbols);
        }
        else if (LowercasePrompt && UppercasePrompt) {
          options = LowerCase.concat(UpperCase);
        }
        else if (LowercasePrompt && SymbolPrompt) {
          options = LowerCase.concat(symbols);
        }
        else if (UppercasePrompt && SymbolPrompt) {
          options = UpperCase.concat(symbols);
        } 
          //Final section is for only 1 option selected
          //Only 4 possibilities: All numbers; all lowercase; all uppercase; all symbols
          else if (NumberPrompt) {
            options = numbers;
            // console.log(options); // Test, make sure only 1 array is logged
          }
          else if (LowercasePrompt) {
            options = LowerCase;
          }
          else if (UppercasePrompt) {
            options = UpperCase;
          }
          else if (SymbolPrompt) {
            options = numbers;
          };
  //empty password variable
  var newPassword = [];
  //This for loop will use a random number generator to randomly select from all variables in the combined array
  for (var i = 0; i < input; i++) {
    var confirmOptions = options[Math.floor(Math.random() * options.length)];
    // console.log(confirmOptions); //Test to ensure for loop is grabbing random options from each array
    newPassword.push(confirmOptions); //Adds new randomly selected element to end of empty array
    // console.log(newPassword); //Test to ensure random array is generated to length of user input
  }

  var finalPassword = newPassword.join(""); //Needed new variable to join all arrays together
  DisplayFinalPW(finalPassword); //Calls below function
  return finalPassword; //executes this function
}

function DisplayFinalPW(finalPassword) {
  document.getElementById("password").textContent = finalPassword;
} // Replaces password in window with final product

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
