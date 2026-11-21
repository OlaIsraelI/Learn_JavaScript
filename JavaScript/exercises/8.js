//Splitting, Repeating and Padding Strings
const csv = "html,css,js";

//Splits the string into individual strings
console.log(csv.split(","));

//Repeat each string 15 times
console.log(csv.repeat(15).split(","));

//Repeat each string 15 times
console.log(csv.repeat(15));

//Repeat each string 15 times such that each sequence starts on a new line
console.log(`\n${csv}\n`.repeat(15));

//Repeat each string 15 times such that each sequence starts seperated with a line or comma or semi-colon
//a. Line
console.log(`\n${csv} | `.repeat(15));

//b. Comma
console.log(`\n${csv} ,`.repeat(15));

//c. semi-colon
console.log(`\n${csv} ;`.repeat(15));

//Using an array of 15 to hold the csv file so that it can repeat 15 times
console.log(Array(15).fill(csv).join("\n"));

//Repeat a string dash "-" into fifteen characters
console.log("-".repeat(15));

//
console.log("42".padStart(5, "0"));
