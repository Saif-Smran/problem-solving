# Problem Solving in TypeScript

A collection of TypeScript solutions for common coding-problem patterns and interview practice. The implementations are kept together in [`solution.ts`](./solution.ts), with sample calls commented next to the relevant functions.

## Included solutions

The current file includes solutions for:

- Staircase
- Grading Students
- Time Conversion
- Repeating a String
- Reversing a String
- Summing Positive Numbers
- Summation
- Boolean to String
- FizzBuzz
- Running Sum of 1D Array
- Richest Customer Wealth
- Remove Duplicates from Sorted Array
- Contains Duplicate
- Move Zeroes
- Merge Sorted Array
- 3Sum
- Plus One
- Reverse String
- Length of Last Word
- Longest Common Prefix

## Requirements

- Node.js
- npm
- TypeScript and `ts-node` (installed through the project dependencies)

## Getting started

Install the dependencies:

```bash
npm install
```

Run the TypeScript file with `ts-node`:

```bash
npm run dev
```

Most example calls are commented out so the file can be used as a reference without producing output. To try a solution, uncomment its example call in [`solution.ts`](./solution.ts), then run `npm run dev`.

## Project structure

```text
.
├── package.json
├── readme.md
└── solution.ts
```

## Notes

- The solutions are written as standalone functions for practice.
- Several functions mutate their input arrays, matching the constraints of their original coding problems.
- There is currently no automated test suite; the commented examples can be used for quick manual checks.