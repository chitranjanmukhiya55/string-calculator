# String Calculator

This is a simple String Calculator implementation following the principles of **Test-Driven Development (TDD)** using **Node.js** and **TypeScript**. The calculator takes a string of comma-separated numbers and returns their sum. It supports multiple features like custom delimiters, new lines between numbers, and handling negative numbers.

## Features

1. **Empty String**: An empty string returns `0`.
2. **Single Number**: A single number returns its own value.
3. **Multiple Numbers**: Multiple numbers separated by commas are summed up.
4. **New Line Support**: Newlines (`\n`) can be used between numbers.
5. **Custom Delimiters**: Custom delimiters are supported at the start of the string (e.g., `//;\n1;2`).
6. **Negative Numbers**: Negative numbers throw an exception, and the exception lists all negative numbers.

## Installation

To run the String Calculator, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/string-calculator.git
cd string-calculator
npm install
npx jest

import { add } from './stringCalculator';
console.log(add(""));  // Output: 0

console.log(add("1"));  // Output: 1
