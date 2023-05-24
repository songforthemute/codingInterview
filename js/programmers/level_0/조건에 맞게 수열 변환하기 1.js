// Lv. 0 조건에 맞게 수열 변환하기 1

/**
 * @param {number[]} arr 정수 배열
 * @returns {number[]} 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱한 결과 배열
 */

const solution = (arr) => {
    return arr.map((v) => {
        if (v >= 50 && v % 2 === 0) return v / 2;
        else if (v < 50 && v % 2 === 1) return v * 2;
        else return v;
    });
};

// test cases
console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]
