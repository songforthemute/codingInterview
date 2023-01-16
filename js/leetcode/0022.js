// 22. Generate Parentheses
const generateParenthesis = (n) => {
    if (n === 0) return [];
    if (n === 1) return ["()"];

    const result = [];
    const DFS = (str, left, right) => {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        if (left < n) DFS(str + "(", left + 1, right);
        if (right < left) DFS(str + ")", left, right + 1);
    };

    DFS("", 0, 0);
    return result;
};

console.log(generateParenthesis(3));
