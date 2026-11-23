//Access and Role Check: Given
const prompt = require("prompt-sync")();
const age = Number(prompt("How old are you? "));

//const age = 19; const hasId = true; const isSuspended = false;, log true only if the person is at least 18, has an ID, and is not suspended.
const hasId = true;
const isSuspended = false;

if (age >= 18 && hasId && !isSuspended) {
  console.log(true);
} else {
  console.log(false);
}
