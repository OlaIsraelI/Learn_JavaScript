//Trimming whitespaces and searching inside strings.
const rawInput = "   Learning    JavaScript    very  fast   ";
const cleanedRawInput = rawInput.trim().split(/\s+/).join(" ");

//Print the length of the string in the rawInput.
console.log(rawInput.length);

//Print the result of the cleanedRawInput.
console.log(cleanedRawInput);

//Print the result of the rawInput.
console.log(rawInput);

//Give a boolean result if rawInput includes javascript.
console.log(rawInput.includes("JavaScript"));

//Give a boolean result if the cleanedRawInput include javascript.
console.log(cleanedRawInput.includes("javascript"));

//Give a boolean result if the cleanedRawInput starts with learning.
console.log(cleanedRawInput.startsWith("learning"));

//Give a boolean result if the cleanedRawInput starts with Learning.
console.log(cleanedRawInput.startsWith("Learning"));

//Give a boolean result if the cleanedRawInput ends with fast.
console.log(cleanedRawInput.endsWith("fast"));

//Return the first index where JavaScript is located if it exists in the string.
console.log(cleanedRawInput.indexOf("JavaScript"));

//Return the first index where Python is located if it exists in the string.
console.log(cleanedRawInput.indexOf("Python"));
