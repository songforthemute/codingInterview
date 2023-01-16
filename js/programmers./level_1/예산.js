// Lv. 1 예산

/**
 *
 * @param {number[]} d
 * @param {number} budget
 * @returns {number}
 */

function solution(d, budget) {
    let result = 0;
    let money = budget;

    for (const item of d.sort((a, b) => a - b)) {
        if (money < item) break;
        money -= item;
        result++;
    }

    return result;
}
