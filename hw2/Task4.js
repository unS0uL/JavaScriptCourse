/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    return (first % second === 0) ? console.log('Without remainder. ' + true) :
        console.log('With remainder. ' + false);
}

module.exports = isDevided;

isDevided(2, 1);
isDevided(2, 3);