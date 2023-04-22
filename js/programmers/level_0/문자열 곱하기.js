// Lv. 0 문자열 곱하기

/**
 * @param {string} my_string 문자열
 * @param {number} k 정수
 * @returns {string} 문자열을 `k`번 반복한 문자열
 */

const solution = (my_string, k) => {
    return Array(k).fill(my_string).join("");
};

// test cases
console.log(solution("string", 3)); // stringstringstring
console.log(solution("love", 10)); // lovelovelovelovelovelovelovelovelovelove
