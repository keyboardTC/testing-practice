// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1 = 1, num2 = 1) {
    if (num2 === 0) {
      return "ERROR"
    } else {
      return (num1 % num2)
    }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(5, 2);
  if (result !== 0 && result !== 1) throw new Error('Expected quotient(5, 2)) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(4, 0);
  if (result !== "ERROR" ) throw new Error('Expected quotient(2, 2) to be ERROR. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(5, 2, 7, 8);
  if (result !== 0 && result !== 1) throw new Error('Expected quotient(5, 2, 7, 8) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(5);
  if (result !== 0 && result !== 1) throw new Error('Expected quotient(5) to be 5. Received: ' + result);

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient();
  if (result !== 0 && result !== 1) throw new Error('Expected quotient() to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 6
  // --------------------------------------------------
  // When the second input is greater than the first inout, it should return the first input.
  var result = quotient(2, 5);
  if (result !== 2) throw new Error('Expected quotient(2, 5) to be 5. Received: ' + result + ` n `+ (2%5));

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
