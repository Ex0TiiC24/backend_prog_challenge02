// Import the function to test
// write here
import ...




























// -------------------------------------------------------------------------------------------------
const testCases = [
  { input: 5, expected: 'OXOXO' },
  { input: 8, expected: 'OXOXOXOX' },
  { input: 3, expected: 'OXO' }
];

console.log('Running Challenge 2 Tests:\n');

let passedCount = 0;
testCases.forEach((test, index) => {
  const result = challenge2(test.input);
  const passed = result === test.expected;

  if (passed) {
    console.log(`✓ Test ${index + 1} passed (n=${test.input}): ${result}`);
    passedCount++;
  } else {
    console.log(`✗ Test ${index + 1} failed (n=${test.input})`);
    console.log(`  Expected: ${test.expected}`);
    console.log(`  Got: ${result}`);
  }
});

console.log(`\n${passedCount}/${testCases.length} tests passed`);
