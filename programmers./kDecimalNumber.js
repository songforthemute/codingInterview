// Lv. 2 k진수에서 소수 개수 구하기

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

function solution(n, k) {
    let count = 0;
    let kDecimal = "";
    let pointer = k;

    while (pointer / k <= n) {
        let nth;

        if (n % pointer === 0) {
            if (n === pointer) {
                nth = 1;
            } else {
                nth = n % k;
            }
        } else {
            nth = Math.floor((n % pointer) / (pointer / k));
        }

        kDecimal = String(nth) + kDecimal;

        pointer *= k;
    }

    let candidates = [];
    let buffer = "";

    for (let i = 0; i < kDecimal.length; i++) {
        if (kDecimal[i] !== "0") buffer += kDecimal[i];
        else if (buffer.length) {
            candidates.push(Number(buffer));
            buffer = "";
        }

        if (i === kDecimal.length - 1 && buffer.length)
            candidates.push(Number(buffer));
    }

    candidates.forEach((v) => {
        if (v === 1) return;

        for (let i = 2; i <= Math.sqrt(v); i++) {
            if (v % i === 0) return;
        }

        count++;
    });

    return count;
}
