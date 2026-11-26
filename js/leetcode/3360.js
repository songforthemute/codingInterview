// 3360. Stone Removal Game

/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if (10 > n) return false;

    let rest = n;
    let current = 10;

    while (rest >= current && rest > 0 && current > 0) {
        rest -= current;
        current--;
    }

    return current % 2 !== 0;
};

// Examples

console.log(
    canAliceWin(12) // true
)

console.log(
    canAliceWin(1) // false
)