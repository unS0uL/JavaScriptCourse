/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var sortFilter = input.filter(function(num) {
        if (num > 0 && num < 10) {
            return num;
        }
    });
    return console.log(sortFilter);
}

function isNumberInRange(input) {

}

module.exports = advancedFilter;

arr = [1, -2 ,3 ,4 ,5 ,-6 ,-7 ,8, 9, 11, 12, 13, 14];
advancedFilter(arr);
