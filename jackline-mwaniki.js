// File: jacklinemwaniki.js

/*
 * Function: reverseString
 * -----------------------
 * Takes a string as input and returns the reversed version of the string.
 *
 * Parameters:
 *   str (string): The string to be reversed
 *
 * Returns:
 *   string: The reversed string
 */
function reverseString(str) {
    // Step 1: Convert the string into an array of characters
    // Step 2: Reverse the array
    // Step 3: Join the characters back into a string
    return str.split("").reverse().join("");
}

// ------------------
// Test cases
// ------------------
console.log(reverseString("hello"));  // Expected output: "olleh"
console.log(reverseString("12345"));  // Expected output: "54321"
console.log(reverseString(""));       // Expected output: ""
