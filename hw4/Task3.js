/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    let arr2 = input.filter(function(digit, i) {
        if (((digit % 3) && (digit % 5) === 0) || (digit % 7 === 0)) {
            return input[i];
        }
    });
    return arr2;
};

module.exports = advancedFilter;


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

console.log(advancedFilter(arr));