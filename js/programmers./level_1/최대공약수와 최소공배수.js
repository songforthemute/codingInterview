// Lv. 1 최대공약수와 최소공배수

/**
 *
 * @param {number} n
 * @param {number} m
 * @returns {[number, number]}
 */

function solution(n, m) {
    let maxDivisor = 0,
        minMultiple = 0;
    let big, small;

    if (n > m) {
        big = n;
        small = m;
    } else if (n < m) {
        big = m;
        small = n;
    } else return [n, m];

    while (small != 0) {
        let i = big % small;
        big = small;
        small = i;
    }

    maxDivisor = big;
    minMultiple = (n * m) / maxDivisor;

    return [maxDivisor, minMultiple];
}
