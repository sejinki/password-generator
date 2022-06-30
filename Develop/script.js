// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
var specialCharacter= [ '!','@','#','$','%','^','&','*','(',')','-','_','+','=' ];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword(correctPrompts);
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword(userChoices) {
  console.log ("Push me!")
  console.log (userChoices.characterLength)
  var selectedCharacters = [];
  if (userChoices.hasLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercase)
  }
  if (userChoices.hasUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercase)
  }
  if (userChoices.hasSpecialCharacter) {
    selectedCharacters = selectedCharacters.concat(specialCharacter)
  }
  if (userChoices.hasNumbers) {
    selectedCharacters = selectedCharacters.concat(numbers)
  }
  console.log(selectedCharacters)

  var password = "";
  for (var i = 0; i < userChoices.characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password = password + selectedCharacters[randomIndex];
}
return password;
}


function getPrompts(){

  var characterLength = parseInt(prompt("How many characters do you want in your password? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Character length has to be a number between 8 - 128 digits. Try again, please.");
  return false;
  }

  // if (confirm("Do you want lowercase letters in your password?")) {
  // choiceArray = choiceArray.concat(uppercase);
  // console.log(choiceArray + "line 49")
  // }
  var hasLowercase = confirm("Do you want lowercase letters in your password?");
  

  // if (confirm("Do you want uppercase letters in your password?")) {
  // choiceArray = choiceArray.concat(lowercase);
  // console.log(choiceArray + "line 55")
  // }

  var hasUppercase = confirm("Do you want uppercase letters in your password?");

  // if (confirm("Do you want numbers in your password?")) {
  // choiceArray = choiceArray.concat(numbers);
  // console.log(choiceArray + "line 60")
  // } 

  var hasNumbers = (confirm("Do you want numbers in your password?"));
  
  // if (confirm("Do you want special characters in your password?")) {
  // choiceArray = choiceArray.concat(specialCharacter);
  // console.log(choiceArray + "line 65")
  // }
  // return true;

  var hasSpecialCharacter = (confirm("Do you want special characters in your password?"));
  if (hasSpecialCharacter === false &&
      hasLowercase === false &&
      hasUppercase === false &&
      hasNumbers === false )
    {alert("must include at least one or more options for password.")
    return null;
  }
var userChoices = {
  characterLength: characterLength,
  hasSpecialCharacter: hasSpecialCharacter,
  hasLowercase: hasLowercase,
  hasUppercase: hasUppercase,
  hasNumbers: hasNumbers,
}
return userChoices;
}
