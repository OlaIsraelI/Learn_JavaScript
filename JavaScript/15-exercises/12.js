//Strings & Text Manipulation

//Trimming Edges & Cleaning Inner Whitespace

//Trimming Edges & Cleaning Inner Whitespace: Given const rawLine = "   clean   this   text   ";, log rawLine.trim(), and also log a version with repeated inner spaces collapsed to a single space (rawLine.trim().split(/\s+/).join(" ")).

const rawline = "   clean this text   ";
console.log(rawline.trim());
console.log(rawline.trim().split(/\s+/).join(" "));
