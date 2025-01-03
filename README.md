# Stack Overflow Error in JavaScript Recursive Function

This repository demonstrates a common error in JavaScript involving stack overflow errors in recursive functions.  The `foo` function calculates a result recursively. However, without proper handling of large inputs, the recursion depth exceeds the call stack limit, causing a stack overflow error.

The `bug.js` file shows the problematic code.  The `bugSolution.js` provides a solution using iteration to avoid stack overflow.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run the function `foo` with a large value for the first argument (e.g., `foo(1000, 1)`).
3. Observe the stack overflow error.
4. Run `bugSolution.js` to see the corrected, iterative version.
