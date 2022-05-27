// 20. Valid Parentheses
const isValid = (s) => {
    if (s.length % 2 !== 0) return false;

    const stack = [];

    for (const bracket of s) {
        if (
            (stack[stack.length - 1] === "(" && bracket === ")") ||
            (stack[stack.length - 1] === "[" && bracket === "]") ||
            (stack[stack.length - 1] === "{" && bracket === "}")
        ) {
            stack.pop();
        } else stack.push(bracket);
    }

    return stack.length ? false : true;
};
