/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    let maxNum = 0;
    let lowMultiple = 0;
    num1 > num2 ? maxNum = num1 : maxNum = num2;
    for (let i = maxNum * 2; ; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            lowMultiple = i;
            break;
        }
    }
    return lowMultiple;
};

module.exports = lowestMultiple;

console.log(lowestMultiple(18, 90))