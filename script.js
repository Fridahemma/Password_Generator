// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  // Get the password length function
  const getPasswordLength = () => {
    const promptLength = prompt("What is your preffered password length");
console.log(promptLength);

const passwordLengthNum = parseInt(promptLength, 10);
console.log("passwordLengthNum:" + passwordLengthNum);

// Validate input as number 8 - 128
if(passwordLengthNum >=8 && passwordLengthNum <= 128) {
  // If valid, confirm criteria
  // Convert userLength to integer and store as getPasswordLengthNum
  return passwordLengthNum;
}  else {
  // If invalid, alert user
   alert("Invalid input ,please enter a valid password"); {
             
}// Get the password criteria function and push to array
  const getPasswordCriteria = () => {
    // Ask user to confirm criteria
    const lowercase = confirm("Would you like toinclude lowercase letters in your password?");
   const uppercase = confirm("Would you like to include uppercase letters in your password?");
   const numeric = confirm("Would you like to include numbers in your password?");
   const specialCharacter = ("Would you like to include special characters in your password?");
   const essentialsCreteria = [];
   if (lowercase) {
     essentialsCreteria.push.apply("abcdefghijklmnopqrstuvwxyz");
   }
   if (uppercase) {
     essentialsCreteria.push.apply("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   }
   if (numeric) {
     essentialsCreteria.push.apply("#,@/<;%$.()+-;:>?[]*£^!_#");
   }
   return essentialsCreteria;

  };

  // Create random password function
  const createRandomPassword = (passwordLength, passwordCriteria) => {
    const passwordArray =[];
    for (let i = 0; i < passwordLength; i +=1) {

      // Select random categories from the array
      const randomCategoriesIndex = Math.floor(Math.random()* passwordCriteria.length);

       };

       // Get random categories
       const randomCategory = passwordCriteria[randomCategoriesIndex];

     // Get random index
     const randomIndex = Math.floor(Math.random() * passwordCriteria.length);

     // Get random character
     const randomCharacter = randomCategory.charAt(randomIndex);
     passwordArray.push.apply(randomCharacter); 

     }

return passwordArray.join("");

};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
