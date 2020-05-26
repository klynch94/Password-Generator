// Creating password variables to be randomly selected...
var generateBtn = document.querySelector("#generate");
var lowercasevariables = "abcdefghijklmnopqrstuvwxyz";
var uppercasevariables = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var numericvariables = "0123456789";
var specialcharactervariables = "!#$%&'()*+,-./:;<=>?@[]^_'{}|~";
 

// Write password to the #password input
function writePassword() {

  // user prompts to determine how many characters they want to include in their password. 
  var numcharacters = prompt("How many characters do you want to include? (Enter a number between 8 and 128");
  var notadecimal = numcharacters.toString(); 

// if statement makes sure their numcharacters input is an integer and is not a decimal..
// prompts user to select what other characters they want in their password
  if (numcharacters <= 128 && numcharacters >= 8 && notadecimal.indexOf(".") ===-1) {
    var lowercaseprompt = confirm("Do you want to include lowercase characters?");
    var uppercaseprompt = confirm("Do you want to include uppercase characters?");
    var numericprompt = confirm("Do you want to include numbers?");
    var specialcharactersprompt = confirm("Do you want to include special characters?");
    var passwordcriteria = [];

      for (var i = 0; i < numcharacters; i++) {
        if (specialcharactersprompt) {
          var numspecial = Math.floor(Math.random() * 33);
          passwordcriteria.push(specialcharactervariables[numspecial]);
        }

        if (lowercaseprompt) {
          var num = Math.floor(Math.random() * 27);
          passwordcriteria.push(lowercasevariables[num]);
        }
        
        if (uppercaseprompt) {
          var numupper = Math.floor(Math.random() * 27);
          passwordcriteria.push(uppercasevariables[numupper]);
        }

        if (numericprompt) {
          var numnumeric = Math.floor(Math.random() * 10);
          passwordcriteria.push(numericvariables[numnumeric]);
        }
      }
    passwordcriteria.sort(() => Math.random() - 0.5);
    var password = passwordcriteria.join("");
    var passwordText = document.querySelector("#password");
    var finalpassword = password.slice(0,numcharacters);

    // Pushing the generated password into the text box
    passwordText.value = finalpassword;
  } 
  else {
    alert("Please enter a number between 8 and 128!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
