// Lv. 0 유한소수 판별하기

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const solution = (a, b) => {
    const recursion = (x, y) => {
        if (y === 0) return x;

        return recursion(y, x % y);
    };

    let deno = b / recursion(a, b);

    for (let i = 3; i <= b; i++) {
        if (deno % i === 0) {
            if (i % 2 !== 0 && i % 5 !== 0) return 2;
        }
    }

    return 1;
};
