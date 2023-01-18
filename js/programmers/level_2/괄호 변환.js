// Lv. 2 괄호 변환

/**
 * @param {string} P 균형잡인 괄호 문자열
 * @return {string} 올바른 괄호 문자열로 변환한 결과
 */

const solution = (P) => {
    return P.length ? execute(P) : "";
};

const inspect = (brackets = "") => {
    let count = 0;

    for (const bracket of brackets) {
        if (bracket === "(") count++;
        else {
            count--;

            if (count < 0) return false;
        }
    }

    return true;
};

const execute = (brackets = "") => {
    let count = 0;
    let u = "";
    let v = "";

    for (let i = 0; i < brackets.length; i++) {
        u += brackets[i];
        brackets[i] === "(" ? count++ : count--;

        if (count === 0) {
            v = brackets.slice(i + 1);
            break;
        }
    }

    if (inspect(u)) {
        return v.length ? u + execute(v) : u;
    } else {
        v = "(" + execute(v) + ")";

        for (let i = 1; i < u.length - 1; i++) {
            v += u[i] === ")" ? "(" : ")";
        }

        return v;
    }
};

// 테스트 케이스
console.log(solution("(()())()")); // "(()())()"
console.log(solution(")(")); // "()"
console.log(solution("()))((()")); // "()(())()"
console.log(solution("))()((")); // "()()()"
