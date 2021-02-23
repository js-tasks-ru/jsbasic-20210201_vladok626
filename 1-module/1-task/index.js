/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let a = 1
  for(let i = 2; i <= n; i++) {
    a = a * i
  }
  return a
}
