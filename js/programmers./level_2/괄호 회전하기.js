// Lv. 2 괄호 회전하기

/**
 *
 * @param {string} s
 * @returns {number}
 */

function solution(s) {
    let count = 0;
    const validate = (str, start, end) => {
        console.log(start, end);
        const stack = [];
        let i = start;
        let turn = 0;

        while (turn !== s.length) {
            if (!stack.length) {
                stack.push(str[i]);
            } else {
                if (str[i] === ")") {
                    if (stack[stack.length - 1] === "(") stack.pop();
                    else return false;
                } else if (str[i] === "]") {
                    if (stack[stack.length - 1] === "[") stack.pop();
                    else return false;
                } else if (str[i] === "}") {
                    if (stack[stack.length - 1] === "{") stack.pop();
                    else return false;
                } else {
                    stack.push(str[i]);
                }
            }

            if (i === s.length - 1) i = 0;
            else i++;

            turn++;
        }

        return stack.length ? false : true;
    };

    for (let i = 0; i < s.length; i++) {
        if (validate(s, i, i === 0 ? s.length - 1 : i - 1)) count++;
    }

    return count;
}
