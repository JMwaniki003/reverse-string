// File: Jackline-Mwaniki.js

/*
 * Function: isEven
 * ----------------
 * Takes a number as input and checks whether it is even.
 *
 * Parameters:
 *   num (number): The number to check
 *
 * Returns:
 *   boolean: true if num is even, false otherwise
 */
function isEven(num) {
    // Check if num is divisible by 2 with no remainder
    if (num % 2 === 0) {
        return true;  // Number is even
    } else {
        return false; // Number is odd
    }
}

// ------------------
// Test cases
// ------------------
console.log(isEven(4));   // Expected output: true (because 4 is even)
console.log(isEven(7));   // Expected output: false (because 7 is odd)
console.log(isEven(-2));  // Expected output: true (because -2 is even)
