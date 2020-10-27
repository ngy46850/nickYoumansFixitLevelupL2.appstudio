Ifelse
 
//Creating out Variables
//NSB.MsgBox() Outputs
if (upperCaseUserState === 'NE' && userTemperature <= 32) {
NSB.MsgBox(upperCaseUserName+", "+messages[0])
} else if (upperCaseUserState === 'NE' && userTemperature > 32 && userTemperature <= 50) {
  NSB.MsgBox(upperCaseUserName+", "+messages[1])
} else if (upperCaseUserState === 'FL' && userTemperature <= 50 && userTemperature >= 32) {
  NSB.MsgBox(upperCaseUserName+", "+messages[2])
} else if (upperCaseUserState === 'FL' && userTemperature > 50 && userTemperature <= 70) {
  NSB.MsgBox(upperCaseUserName+", "+messages[3])
}
 
switch
 
//Creating out Variables
let userName = prompt(`the users' first name`);
let userState = prompt(`the users' state (2 letters)`);
let userTemperature = Number(prompt(`the users' temperature (number) in Fahrenheit`));
 
//Automating the first letter in the Name to be capitalized
let upperCaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
 
//Making both the letters in the state capitalized
let upperCaseUserState = userState.toUpperCase()
 
//Creating the Array
let userArray = [upperCaseUserName, upperCaseUserState, userTemperature];
 
//Creating our messages Array
let messages = ["wear a warm coat, hat, scarf and gloves", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]
 
//Switch Statement Ouptputs
switch (userTemperature, upperCaseUserState) {
case(userTemperature < 32 && upperCaseUserState === "NE"):
  NSB.MsgBox("Weat a warm coat, hat, scarf and gloves.")
  break;
case(userTemperature >= 32 && userTemperature < 50 && upperCaseUserState === "NE"):
  NSB.MsgBox("wear a warm coat but you won't need a hat, scarf or gloves.")
  break;
case(userTemperature >= 32 && userTemperature < 50 && upperCaseUserState === "FL"):
  NSB.MsgBox("wear your warmest coat, a warm hat, a scarf, and warm gloves.")
  break;
case(userTemperature >= 50 && userTemperature < 70 && upperCaseUserState === "FL"):
  NSB.MsgBox("wear a warm coat, hat and gloves. Maybe a scarf too.")
  break;
default:
  NSB.MsgBox("I do not know what you should wear.")