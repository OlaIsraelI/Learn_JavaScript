//Conditional statements
const prompt = require("prompt-sync")();
const score = Number(prompt("What is your score? "));

if (score >= 95) {
  console.log("Grade: A+, Remark: Excellent");
} else if (score < 95 && score >= 90) {
  console.log("Grade: A, Remark: Very Good");
} else if (score < 90 && score >= 75) {
  console.log("Grade: B+, Remark: Good");
} else if (score < 75 && score >= 60) {
  console.log("Grade: B, Remark: Alright");
} else if (score < 60 && score >= 50) {
  console.log("Grade: C, Remark: Okay");
} else if (score < 50 && score >= 40) {
  console.log("Grade: D, Remark: Average");
} else if (score < 40 && score >= 30) {
  console.log("Grade: E, Remark: Pass");
} else {
  console.log("Grade: F, Remark: Fail");
}
