//Strings & Text Manipulation

//Trimming Edges & Cleaning Inner Whitespace

const rawline = "   clean this text   ";
console.log(rawline.trim());
console.log(rawline.trim().split(/\s+/).join(" "));
