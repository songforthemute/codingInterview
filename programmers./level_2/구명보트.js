// Lv. 2 구명보트

/**
 *
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */

function solution(people, limit) {
    const sorted = people.sort((a, b) => a - b);
    let result = 0,
        left = 0,
        right = sorted.length - 1;

    while (left <= right) {
        if (sorted[left] + sorted[right] <= limit) left++;

        right--;
        result++;
    }

    return result;
}
