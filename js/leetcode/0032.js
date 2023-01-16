// 32. Longest Valid Parentheses
const longestValidParentheses = (s) => {
    if (s.length <= 1) return 0;

    const stack = [-1];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            // 매치가 되지 않은 브라켓을 찾았다면 스택에 삽입
            stack.push(i);
        } else {
            // 매치가 되는 쌍을 찾았다면 후입선출 후,
            stack.pop();

            if (!stack.length) {
                // 스택이 비었는지 검사해서 푸시
                stack.push(i);
            } else {
                // 매치가 되어서 지웠지만 그래도 스택이 차 있다면 최댓값 계산
                count = Math.max(count, i - stack[stack.length - 1]);
            }
        }
    }

    return count;
};
