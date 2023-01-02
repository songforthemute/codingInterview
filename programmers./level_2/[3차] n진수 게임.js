// Lv. 2 [3차] n진수 게임

/**
 * @param {number} n 진법
 * @param {number} t 미리 구할 숫자의 개수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 * @return {string}
 */

const solution = (n, t, m, p) => {
    let result = "";
    let turn = 0;
    const breakpoint = p % m;

    for (let currentNum = 0; ; currentNum++) {
        for (const char of currentNum.toString(n).split("")) {
            if (++turn % m === breakpoint) {
                result += char;

                if (result.length === t) {
                    return result.toUpperCase();
                }
            }
        }
    }
};
