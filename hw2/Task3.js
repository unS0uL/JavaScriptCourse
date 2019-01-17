/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

function secondsCount(hours) {
    if (typeof hours !== 'number') {
        console.log("Its \'" + hours + "\' not a number, put a number");
        return;
    }
    return console.log(hours + ' hours its a ' + hours * 3600 + ' seconds');
}

module.exports = secondsCount;

secondsCount('1');
secondsCount(11);
secondsCount(15);