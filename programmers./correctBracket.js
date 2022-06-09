// 올바른 괄호
function solution(s) {
    if (
        s.length <= 1 ||
        s.length % 2 !== 0 ||
        s[0] === ")" ||
        s[s.length - 1] == "("
    )
        return false;

    const stack = [];

    for (const bracket of s) {
        if (bracket === "(") stack.push(1);
        else stack.pop();
    }

    return stack.length === 0 ? true : false;
}
