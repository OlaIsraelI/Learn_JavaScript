//Order-Seneitive
const prompt = require("prompt-sync")();

const discountRate = parseFloat(
  prompt("What is the dicount (i.e 0.1, 0.2, 0.3, etc.? "),
);
const cartTotal = Number(prompt("What is the total items? "));

if (cartTotal >= 100) {
  console.log(0.2);
} else if (cartTotal >= 50) {
  console.log(0.1);
} else {
  console.log(0);
}

console.log(cartTotal * (1 - discountRate));
