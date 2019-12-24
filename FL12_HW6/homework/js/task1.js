// Your code goes here
const a = Number(prompt("Enter a value (only numbers > 0)"));
const b = Number(prompt("Enter b value (only numbers)"));
const c = Number(prompt("Enter c value (only numbers)"));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  console.log("Invalid input data");
} else {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    console.log("no solution ");
  } else {
    const x1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    if (x1 === 0) {
      console.log("x = 0");
    } else {
      const x2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
      console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
  }
}
