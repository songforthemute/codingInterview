// Lv. 0 수 조작하기 2

/**
 * @param {number[]} numLog 매번 조작을 할 때마다 결괏값을 기록한 정수 배열
 * @returns {string} 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열
 */

const solution = (numLog) => {
    const eNum = {
        1: "w",
        "-1": "s",
        10: "d",
        "-10": "a",
    };

    return numLog.reduce(
        (pre, cur, idx, arr) =>
            idx !== arr.length - 1 ? pre + eNum[arr[idx + 1] - cur] : pre,
        ""
    );
};

// test cases
console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"
