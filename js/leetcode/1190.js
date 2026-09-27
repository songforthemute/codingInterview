// 1190. Reverse Substrings Between Each Pair of Parentheses

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    /**
     * 스택
     * 나보다 앞이거나, 뒤거나 -> 경우의 수가 2개
     * 
     * 인덱스는 0부터
     * 
     * 앞은 앞에, 뒤는 뒤에 붙이는 구분자가 필요하다.
     */

    let stack = [];
    let current = '';

    s.split('').forEach((v, i) => {
        if (v === '(') {
            stack.push(current);
            current = '';
            return;
        }

        if (v === ')') {
            current = stack.pop() + current.split('').reverse().join('');
            return;
        }

        current += v;
    })
  
    return current;
};

// Examples
console.log(
    reverseParentheses("(abcd)"), // Output: "dcba"
)

console.log(
    reverseParentheses("(u(love)i)"), // Output: "iloveu" 
)

console.log(
    reverseParentheses("(ed(et(oc))el)"), // Output: "leetcode"
)