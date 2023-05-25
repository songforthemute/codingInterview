// Lv. 0 문자열 묶기

/**
 * @param {string[]} strArr 문자열 배열
 * @returns {number} strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기
 */

const solution = (strArr) => {
    return Math.max(
        ...Object.values(
            strArr.reduce((pre, cur) => {
                pre[cur.length] ? pre[cur.length]++ : (pre[cur.length] = 1);
                return pre;
            }, {})
        )
    );
};

// test cases
console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2
