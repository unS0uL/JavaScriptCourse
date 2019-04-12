/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let lowHighVal = 1;
    input.forEach(function (item) {
        if (order) {
            if (lowHighVal < item) {
                lowHighVal = item;
            }
        } else {
            if (item < lowHighVal) {
                lowHighVal = item;
            }
        }
    });
    return lowHighVal;
};

module.exports = maxMin;

let arr = [12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(maxMin(arr, true));
console.log(maxMin(arr, false));