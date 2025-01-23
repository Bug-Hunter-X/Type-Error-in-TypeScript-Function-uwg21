# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript that occurs when a function is called with arguments of incorrect types.  The `add` function expects two numbers, but the example code attempts to pass a string and a number. This will result in a type error during compilation.

The `bug.ts` file contains the code that produces the error, and `bugSolution.ts` demonstrates a possible solution using type guards or conditional types. 

## How to reproduce
1. Clone this repository.
2. Compile the code using `tsc bug.ts`
3. Observe the type error message in the compiler output.

## Solution
The solution involves using TypeScript's type system to properly handle the input types. This could involve using type guards, conditional types, or input validation.