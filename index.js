var addUpperLetters;
var addLowerletters;
var passLength; 
var addSpecialCharacters;
var addNumbers;
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseLettersArray = lowerCaseLetters.split("");
var upperCaseLetters = lowerCaseLetters.toUpperCase();
var upperCaseLettersArray = upperCaseLetters.split("");
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var specialCharactersArray = specialCharacters.split("");


function passGen(){
   var result = [];
   var resultStr = "";
  passLength = prompt("How many characters long? (must be between 8 and 128)");
  
  if(passLength < 8 || passLength > 128){
    alert("length invalid");
    return;
  }
  addUpperLetters =  confirm("Would you like upper case letters?");
  if(addUpperLetters){
      //add uppercase letters to the result array
      result = result.concat(upperCaseLettersArray);
      
  }
  addLowerLetters =  confirm("Would you like lower case letters?");
  if(addLowerLetters){
    //add lowercase letters to the result array
    result = result.concat(lowerCaseLettersArray);
    
}
  addSpecialCharacters =  confirm("Would you like special characters?");
  if(addSpecialCharacters){
    //add special characters to the result array
    result = result.concat(specialCharactersArray);
    
}

  addNumbers =  confirm("Would you like numbers");
  if(addNumbers){
    
    result = result.concat(numbers);
}
if(result.length === 0){
    alert("No Character type selected");
    return;
}
    

  for(var i = 0; i < passLength; i++){

    var randomResultIndex = Math.floor(result.length*Math.random());
   
    var randomCharacter = result[randomResultIndex];
    
    resultStr = resultStr + randomCharacter;

  }
  console.log(resultStr);

  document.getElementById("exampleFormControlTextarea1").value = resultStr;

}


