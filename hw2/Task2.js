/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

function hourQuoter (minute) {
    if (typeof minute !== 'number') {
        console.log("Its \'" + minute + "\' not a number, put a number");
        return;
    }
    return (1 <= minute && minute <= 15) ? console.log(minute + ' Firs quater') :
        (16 <= minute && minute <= 30) ? console.log(minute + ' Two quater') :
            (31 <= minute && minute <= 45) ? console.log(minute + ' Three quater') :
                (46 <= minute && minute <= 60) ? console.log(minute + ' Four quater') : null;
}

module.exports = hourQuoter;

hourQuoter('10');
hourQuoter(10);
hourQuoter(20);
hourQuoter(40);
hourQuoter(50);