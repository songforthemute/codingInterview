// Lv.1 푸드 파이트 대회

/**
 *
 * @param {number[]} food
 * @returns {string}
 */

function solution(food) {
    let p1 = "";
    let p2 = "";

    let i = 1;

    while (food[i]) {
        let now = Math.floor(food[i] / 2);

        if (now !== 0) {
            p1 += `${i}`.repeat(now);
            p2 = `${i}`.repeat(now) + p2;
        }

        i++;
    }

    return p1 + "0" + p2;
}
