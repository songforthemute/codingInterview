// 1541. Minimum Insertions to Balance a Parentheses String

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const stack = []
    let count = 0

    for (const c of s) {
        if (stack.length === 0) {
            stack.push(c);
            continue
        }

        if (c === '(') {
            switch (stack[stack.length - 1]) {
                case '()': 
                    stack.pop();
                    count++;
                    stack.push(c);
                    break;
                case ')':
                    stack.pop();
                    count += 2;
                    stack.push(c);
                    break;
                default:
                    stack.push(c);
                    break;
            }
        }

        else {
            switch (stack[stack.length - 1]) {
                case '(':
                    stack[stack.length - 1] += c;
                    break;
                case '()':
                    stack.pop();
                    break;
                case ')':
                    stack.pop();
                    count++;
                    break;
                default:
                    break;

            }
        }
    }

    // 남은 미완성 괄호 정리
    for (const c of stack) {
        if (c === '()') {
            count++;
        } else {
            count += 2;
        }
    }

    return count;
};

// Test cases
// console.log(
//     minInsertions(
//         "(()))" // 1
//     )
// )

// console.log(
//     minInsertions(
//         "())" // 0
//     )
// )

// console.log(
//     minInsertions(
//         "))())(" // 3
//     )
// )


console.log(
    minInsertions(
        "(()))(()))()())))" // 4
    )
)


