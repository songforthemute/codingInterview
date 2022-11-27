// Lv. 1 햄버거 만들기

/**
 * @param {number[]} ingredient
 * @returns {number}
 */

function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (const n of ingredient) {
        stack.push(n);

        if (stack.length >= 4) {
            let bread2 = stack[stack.length - 4];
            let greens = stack[stack.length - 3];
            let meat = stack[stack.length - 2];
            let bread1 = stack[stack.length - 1];

            if (bread1 === 1 && meat === 3 && greens === 2 && bread2 === 1) {
                count++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }

    return count;
}
