// Lv.2 다음 큰 숫자

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    const onesCount = n
        .toString(2)
        .split("")
        .filter((v) => v === "1").length;
    let least = n + 1;

    function countingOnes(num) {
        return num
            .toString(2)
            .split("")
            .filter((v) => v === "1").length;
    }

    while (true) {
        if (onesCount === countingOnes(least)) return least;
        else least++;
    }
}
