// Lv. 2 점프와 순간 이동

/**
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let charge = 0;
    let location = n;

    while (location !== 0) {
        if (location % 2 === 1) {
            location--;
            charge++;
        } else {
            location /= 2;
        }
    }

    return charge;
}
