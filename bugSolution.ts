function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return "Error: Invalid input types";
  }
}

let result1 = addSafe(10, 20); // Correct usage
let result2 = addSafe("hello", 20); // Safe handling of incorrect types
console.log(result1); // Output: 30
console.log(result2); // Output: Error: Invalid input types