/**
 * Filter array. Move zeros in the end of string.
 * @returns {Array<number>} Returns filtered array.
 * @param arr
 */

const moveZeros = function (arr) {
    arr.filter(function (item, i) {
        if (!item) {
            arr.splice(i, 1);
            arr.push(item);
        }
    });
    return arr;
};

module.exports = moveZeros;

let arr = [12, 13, 0, 15, 16, 17, 0, 1, 2, 3, 0, 5, 6, 7, 8, 0, 10, 11];
console.log(moveZeros(arr));
