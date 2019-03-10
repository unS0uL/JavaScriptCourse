/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function advancedFilter(input) {
    let arr2 = [];
    for (let i = 0; i < input.length; i++) {
        if (isNumberInRange(input[i]))
        arr2.push(input[i]);
    }
    return arr2;
}

function isNumberInRange(input) {
   return input > 0 && input < 10;
}

module.exports = advancedFilter;

let arr = [1, -2 ,3 ,4 ,5 ,-6 ,-7 ,8, 9, 11, 12, 13, 14];
console.log(advancedFilter(arr));