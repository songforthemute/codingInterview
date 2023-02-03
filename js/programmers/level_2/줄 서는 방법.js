// Lv. 2 줄 서는 방법

/**
 * @param {number} n 줄 선 사람의 수
 * @param {number} k 사전 순으로 나열 했을 때의 k번째 순서
 * @return {number[]} k번째의 줄 서는 방법
 */

const solution = (n, k) => {
    const factorial = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) result *= i;
        return result;
    };

    // init numbers array
    const numbers = new Array(n).fill(1).map((v, i) => v + i);
    const result = [];

    for (let i = 1; i <= n; i++) {
        // find right number
        let fac = factorial(numbers.length - 1);
        let index = Math.ceil(k / fac) - 1;

        // place number
        result.push(numbers[index]);

        // reconciliate k & numbers array
        k -= index * fac;
        numbers.splice(index, 1);
    }

    return result;
};

// test cases
console.log(solution(3, 5)); // [3, 1, 2]
console.log(solution(4, 23)); // [3, 1, 2]
