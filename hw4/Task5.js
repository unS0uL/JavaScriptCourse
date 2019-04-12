
/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const moveZeros = function (arr) {
    let colectZerro = [];
    let changedArr = arr.filter(function(item, i) {
        if (!item) {
            colectZerro.push(item);
        }
            return item;
    });
    colectZerro = colectZerro.join(',');
    changedArr = changedArr.join(',') + ',' + colectZerro;
   return changedArr.split(',');
}

module.exports = moveZeros;

let arr = [12, 13, 0, 15, 16, 17, 0, 1, 2, 3, 0, 5, 6, 7, 8, 0, 10, 11];


console.log(moveZeros(arr));
