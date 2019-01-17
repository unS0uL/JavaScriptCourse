/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    let calcFactorial = 1;
    for (num; num !== 0;) {
        calcFactorial *= num--;
    }
    return console.log('Factorial of number: ' + calcFactorial);
}

module.exports = factorial;

factorial(4);
factorial(5);