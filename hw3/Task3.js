/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    if (input.toLowerCase() === input.toLowerCase().split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPolindrome;

console.log(isPolindrome("anna"));