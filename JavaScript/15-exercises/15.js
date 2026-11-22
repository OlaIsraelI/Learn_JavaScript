//Strings & Text Manipulation
//Splitting, Repeating With Separators & Padding

//Splitting, Repeating With Separators & Padding: Given const tags = "node,npm,cli";, log tags.split(","), log ${tags}\n.repeat(3) (or join 3 copies with " | "), and log "7".padStart(4, "0").

const tags = "node,npm,cli";

console.log(tags.split(","));
console.log(`${tags}\n`.repeat(3));
console.log(Array(3).fill(tags).join(" | "));
console.log("7".padStart(4, "0"));
