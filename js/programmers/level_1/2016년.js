// Lv. 1 2016년

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */

function solution(a, b) {
    let day = b;
    const arr = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    const obj = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };

    for (let i = 1; i < a; i++) day += obj[i];

    return arr[day % 7];
}
