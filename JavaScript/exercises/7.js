//Extracting and replacing parts of strings.
const sentence = "JS is fun and JS is interactive.";

//Slice the strings to show index 0 -- 5 and stop before index 6
console.log(sentence.slice(0, 6));

//Slice the strings to show index 6 -- to the end
console.log(sentence.slice(6));

//Slice the string to show only the last 7 indexes alone
console.log(sentence.slice(-8));

//Replace the string "JS" with "JavaString"
console.log(sentence.replace("JS", "JavaScript"));

//Replace the all string "JS" with
console.log(sentence.replaceAll("JS", "JavaScript"));
