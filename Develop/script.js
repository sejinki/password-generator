// Assignment Code
var generateBtn = document.querySelector("#generate");

var choiceArray = [];
var characterLength = 8;

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
var specialCharacter= [ '!','@','#','$','%','^','&','*','(',')','-','_','+','=' ];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  console.log ("Push me!")
  console.log (characterLength + "line 28")
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.Random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
    console.log(choiceArray + "before");
    choiceArray.push ("o");
    console.log(choiceArray + "after");
}
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts(){

  choiceArray [];

  characterLength = parseInt(prompt("How many characters do you want in your password? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Character length has to be a number between 8 - 128 digits. Try again, please.");
  return false;
  }

  if (confirm("Do you want lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(uppercase);
  console.log(choiceArray + "line 49")
  }
  

  if (confirm("Do you want uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowercase);
  console.log(choiceArray + "line 55")
  }

  if (confirm("Do you want numbers in your password?")) {
  choiceArray = choiceArray.concat(numbers);
  console.log(choiceArray + "line 60")
  } 

  if (confirm("Do you want special characters in your password?")) {
  choiceArray = choiceArray.concat(specialCharacter);
  console.log(choiceArray + "line 65")
  }
  return true;
}
