// Lv. 1 콜라 문제

/**
 *
 * @param {number} a 콜라를 받기 위해 마트에 주어야하는 병 수
 * @param {number} b 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
 * @param {number} n 가지고 있는 빈 병의 개수
 * @returns {number}
 */

function solution(a, b, n) {
    let count = 0;
    let reserve = n;

    while (reserve >= a) {
        let gotCoke = Math.floor(reserve / a) * b;
        count += gotCoke;
        reserve = (reserve % a) + gotCoke;
    }

    return count;
}
