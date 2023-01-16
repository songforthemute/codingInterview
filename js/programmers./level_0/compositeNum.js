// Lv. 0 합성수 찾기

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    if (n <= 3) return 0;

    let arr = new Array(n + 1).fill(false, 0, 2);

    for (let i = 2; i <= n; i++) {
        if (arr[i] !== false) arr[i] = true;
        for (let j = i + i; j <= n; j += i) {
            arr[j] = false;
        }
    }

    return arr.filter((v) => v === false).length - 2;
};
