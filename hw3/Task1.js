/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(input) {
    let arrPositive = [];
    input.forEach(function (item) {
        if (item > 0) arrPositive.push(item);
    });
    return console.log(arrPositive);
}

function isPositive(input) {
    input.forEach(function (item) {
        if (item > 0) {
            console.log(item + ' is a positive number. TRUE');
        } else {
            console.log(item + ' is a negative number. FALSE');
        }
    });
}

module.exports = negativeFilter;

arr = [1, -2 ,3 ,4 ,5 ,-6 ,-7 ,8];
negativeFilter(arr);
isPositive(arr);