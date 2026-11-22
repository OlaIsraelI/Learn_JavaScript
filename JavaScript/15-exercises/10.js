//Math Operators, Precedence, Math Methods & Number Edge Cases
//Floating-Point Precision, NaN & Infinity

// Log 0.1 + 0.2, "JS" * 3 (and Number.isNaN("JS" * 3)), 100 / 0, and Number.isFinite(-100 / 0) so you see binary floating-point quirks, NaN, and non-finite division results firsthand.
console.log(0.1 + 0.2, "JS");
console.log(Number.isNaN("JS" * 3), 100 / 0);
console.log(Number.isFinite(-100 / 0));
