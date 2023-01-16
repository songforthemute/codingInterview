// Lv. 3 이중우선순위큐

/**
 *
 * @param {string[]} operations
 * @returns {[number, number]}
 */

const solution = (operations) => {
    const queue = [];
    const commands = operations.map((v) => v.split(" "));

    for (const command of commands) {
        const [operator, data] = command;

        if (operator === "I") {
            queue.push(Number(data));
        } else if (queue.length !== 0 && data === "1") {
            queue.splice(queue.indexOf(Math.max(...queue)), 1);
        } else if (queue.length !== 0 && data === "-1") {
            queue.splice(queue.indexOf(Math.min(...queue)), 1);
        }
    }

    return queue.length === 0
        ? [0, 0]
        : [Math.max(...queue), Math.min(...queue)];
};
