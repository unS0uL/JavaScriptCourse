/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    let arrPositive = [];
    input.forEach(function (item) {
        (item > 0) ? arrPositive.push(item) : null;
    });
    return console.log(arrPositive);
}

module.exports = negativeFilter;

negativeFilter([1, -2 ,3 ,4 ,5 ,-6 ,-7 ,8]);