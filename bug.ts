function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 10); // Type Error. Expected number, got string
console.log(result);