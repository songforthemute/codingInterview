// 1614. Maximum Nesting Depth

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    /**
     * 스택 문제와 유사하다.
     * 괄호가 몇 번 열렸는가
     *  -> '중첩된 괄호'
     */

    const stack = []
    let max = 0

    for (const c of s) {
        if (c === '(') {
            stack.push(c)
            max = Math.max(max, stack.length)
        }

        if (c === ')') {
            const last = stack[stack.length - 1]

            if (last === '(') stack.pop()
        }
    }

    return max
};

// Examples

console.log(
    maxDepth(
        "(1+(2*3)+((8)/4))+1"
    ) // 3
)

console.log(
    maxDepth(
        "(1)+((2))+(((3)))"
    ) // 3
)

console.log(
    maxDepth(
        "()(())((()()))"
    ) // 3
)
