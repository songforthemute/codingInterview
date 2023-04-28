// Lv. 0 배열의 길에 따라 다른 길이 연산하기

/**
 * @param {number[]} arr 정수 배열
 * @param {number} n 정수
 * @returns {number[]} arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열
 */

const solution = (arr, n) => {
    return arr.length % 2
        ? arr.map((v, i) => (i % 2 ? v : v + n))
        : arr.map((v, i) => (i % 2 ? v + n : v));
};

// test cases
console.log(solution([49, 12, 100, 276, 33], 27)); // [76, 12, 127, 276, 60]
console.log(solution([444, 555, 666, 777], 100)); // [444, 655, 666, 877]
