/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    return input.toLowerCase() === input.toLowerCase().split('').reverse().join('')
}

module.exports = isPolindrome;

console.log(isPolindrome("anna"));