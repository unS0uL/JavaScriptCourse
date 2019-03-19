/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    let minNum = 0;
    let devisor = 0;
    num1 < num2 ? minNum = num1 : minNum = num2;
    for (let i = 0; i < minNum; i++){
        if (num1 % i === 0 && num2 % i === 0) {
            devisor = i;
        }
    }
    return devisor;
};

module.exports = commonDevisor;

console.log(commonDevisor(4, 10));