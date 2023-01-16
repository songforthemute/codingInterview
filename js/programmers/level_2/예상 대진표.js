// Lv. 2 예상 대진표

/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */

const solution = (N, A, B) => {
    let count = 0;
    let a = A;
    let b = B;

    while (a !== b) {
        if (a % 2 !== 0) a++;
        if (b % 2 !== 0) b++;

        if (a > 1) a /= 2;
        if (b > 1) b /= 2;

        count++;
    }

    return count;
};
