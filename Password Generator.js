var characterLength = 8;
var choiceArr = [];

var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var specialCharArr = [
    "@",
    "%",
    "!",
    "#",
    "&",
    "+",
    "*",
    "=",
    "]",
    "/",
    "?",
    ",",
    "~",
    ";",
];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");
    // Either true or false

    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = password;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
    //I would generate password based on the prompts
    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
    choiceArr = [];
    characterLength = parseInt(
        prompt("How many characters do you want your password to be?(8 - 128")
    );
    // Nan

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        // Im hoping that this is false
        alert(
            "character length has to be a number, 8 - 128 digits. Please try again."
        );
        return false;
    }
    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperCassArr);
    }
    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCassArr);
    }
    if (confirm("Would you like special characters in your password?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers letters in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}