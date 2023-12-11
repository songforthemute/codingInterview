// 134. Gas Station - Medium

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const LEN = gas.length;

    let current = 0;
    let total = 0;
    let index = 0;

    for (let i = 0; i < LEN; i++) {
        const sum = gas[i] - cost[i];

        current += sum;
        total += sum;

        if (current < 0) {
            current = 0;
            index = i + 1;
        }
    }

    return total >= 0 ? index : -1;
};

// TEST CASES
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
