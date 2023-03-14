// Assignment Code
var generateBtn = document.querySelector("#generate");

const LC = [
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
const UC = LC.map(function (x) {
  return x.toUpperCase();
});
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SP = [
  " ",
  "!",
  "”",
  "#",
  "$",
  "%",
  "&",
  "'",
  "*",
  "+",
  ",",
  "-",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "@",
  "`",
  "{",
];
// IDK why it looks like I don't think prettier likes me.

// Write password
var generatePassword = function () {
  var length = prompt("Choose between 8 - 128 charaters for your password");

  if (length < 8) {
    return "Password must be longer!\nOops try again.";
  } else if (length > 128) {
    return "Password length must be shorter!\nOops try again.";
  }
  console.log("You choose length of " + length + ".");

  //lowercase stuff (hate)
  var lowerCase = confirm("Include lowercase letters to your password?");
  if (lowerCase) {
    console.log(lowerCase);
    lowercase_array = LC;
  }

  //uppercase stuff (hate)
  var uppercase = confirm("Include uppercase letters in your password?");
  if (uppercase) {
    console.log(uppercase);
    uppercase_array = UC;
  }

  //ask for numbers (double hate)
  var numberCharacter = confirm("Include numbers in your password?");
  if (numberCharacter) {
    console.log(numberCharacter);
    numbers_array = num;
  }

  //ask for special characters (LOATHE ENTIRELY)
  var specialCharacter = confirm("Include special charaters in your password?");
  if (specialCharacter) {
    console.log(specialCharacter);
    special_array = SP;
  }

  //This one really took way too long to figure out
  var newarray = lowercase_array.concat(
    uppercase_array,
    numbers_array,
    special_array
  );
  var pw = [];

  for (let i = 0; i < length; i++) {
    pw.push(newarray[~~(Math.random() * newarray.length)]);
  }
  // this sucks
  result = pw.join("");
  return pw.join("");
};
// All of the functions - this really is alot
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
