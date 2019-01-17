/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

function stringBuilder(input) {
    let numToString = '';

    if ( typeof input !== 'number') {
        console.log("Its \'" + input + "\' not a number, put a number");
        return;
    }

    if (input > 1) {
        for (let i = 1; i < input; i++){
            numToString += i + ',';
        }
    } else if ( input < 1) {
        for (let i = 1; i > input; i--){
            numToString += i + ',';
        }
    }
    return console.log(numToString.slice(0, numToString.length - 1));
}

module.exports = stringBuilder;

stringBuilder('2');
stringBuilder(11);
stringBuilder(-11);

