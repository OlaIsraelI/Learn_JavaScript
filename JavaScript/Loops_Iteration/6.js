//Exercise 2: Multiplication Table Generator
//Given const base = 7;, use a for loop from 1 to 12 to print each line in the exact format:7 x 1 = 7 through 7 x 12 = 84.

//For loop
//6. Multiplication Table Generator
const base = 7;
for (n = 1; n <= 12; n++) {
  console.log(`${base} x ${n} = ${base * n}`);
}
