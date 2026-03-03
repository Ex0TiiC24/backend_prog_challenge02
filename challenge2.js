// challenge2.js - Print O X O X O ... pattern
// then export the function for testing by using named export

function challenge2(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      result += 'O';
    } else {
      result += 'X';
    }
  }
  return result;
}
