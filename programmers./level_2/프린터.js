// Lv. 2 프린터

/**
 *
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */

function solution(priorities, location) {
    if (priorities.length === 1) return 1;

    const prior = priorities.map((a, i) => [a, i]);
    const set = priorities.sort((a, b) => b - a);
    let count = 1;
    const circulation = (arr) => {
        const temp = arr[0];
        arr.shift();
        arr.push(temp);
        return arr;
    };

    while (true) {
        if (prior[0][0] === set[0]) {
            if (prior[0][1] === location) return count;
            prior.shift();
            set.shift();
            count++;
        } else circulation(prior);
    }
}
