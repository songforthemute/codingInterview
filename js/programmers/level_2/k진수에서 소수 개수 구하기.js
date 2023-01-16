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

    kDecimal.split("0").forEach((v) => {
        num = Number(v);

        if (num === 1 || !num) return;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return;
        }

        count++;
    });

    return count;
}
