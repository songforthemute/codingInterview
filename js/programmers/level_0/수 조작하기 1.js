// Lv. 0 수 조작하기 1

/**
 * @param {number} n 정수
 * @param {string} control 문자열
 * @returns {string} 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n
 */

const solution = (n, control) => {
    return [...control].reduce((pre, cur) => {
        switch (cur) {
            case "w":
                return pre + 1;
            case "s":
                return pre - 1;
            case "d":
                return pre + 10;
            case "a":
                return pre - 10;
            default:
                return pre;
        }
    }, n);
};

// test cases
console.log(solution(0, "wsdawsdassw")); // -1
