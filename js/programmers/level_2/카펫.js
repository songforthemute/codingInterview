// Lv. 2 카펫

/**
 *
 * @param {number} brown
 * @param {number} yellow
 * @returns {[number, number]}
 */

function solution(brown, yellow) {
    if (Number.isInteger(Math.sqrt(yellow)))
        return new Array(2).fill(Math.sqrt(yellow) + 2);

    const edge = brown / 2 + 2;
    let heigth = 1;
    let width = edge - heigth;

    while (true) {
        if (width * heigth === brown + yellow) return [width, heigth];
        width--;
        heigth++;
    }
}
