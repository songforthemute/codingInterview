// Lv. 2 마법의 엘리베이터

/**
 * @param {number} storey 민수와 마법의 엘리베이터가 있는 층을 나타내는 정수
 * @return {number} 0층으로 가기 위해 필요한 마법의 돌의 최소값
 */

const solution = (storey) => {
    const str = [...String(storey)].map((v) => Number(v));
    const results = [];

    const recursion = (i = str.length - 1, current = 0, rest = 0) => {
        if (i < 0) {
            results.push(current + rest);
            return;
        }

        const n = str[i] + rest;

        recursion(i - 1, current + n);
        recursion(i - 1, current + 10 - n, 1);
    };

    recursion();

    return Math.min(...results);
};

// test cases
console.log(solution(16)); // 6
console.log(solution(2554)); // 16
console.log(solution(91919)); // 7
console.log(solution(95)); // 6
