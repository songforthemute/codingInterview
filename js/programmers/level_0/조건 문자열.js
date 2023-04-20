// Lv. 0 조건 문자열

/**
 * @param {string} ineq "<" || ">"
 * @param {string} eq "=" || "!"
 * @param {number} n 정수1
 * @param {number} m 정수2
 * @returns {number} `ineq`와 `eq`의 조건에 맞으면 1, 아니면 0
 */

const solution = (ineq, eq, n, m) => {
    if (ineq === "<") {
        if (eq === "=") return n <= m ? 1 : 0;
        else return n < m ? 1 : 0;
    } else {
        if (eq === "=") return n >= m ? 1 : 0;
        else return n > m ? 1 : 0;
    }
};

// test cases
console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0
