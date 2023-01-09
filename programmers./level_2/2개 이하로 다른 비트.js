// Lv. 2 2개 이하로 다른 비트

/**
 * @param {number[]} numbers 정수들이 담긴 배열
 * @returns {number[]} numbers의 모든 수들에 대해 각 수의 f 값을 담은 배열
 */

const solution = (numbers) => {
    return numbers.map((number) => {
        if (number % 2 === 0) return number + 1;

        let numberBinary = ["0", ...number.toString(2).split("")];
        let lastZeroIndex = numberBinary.lastIndexOf("0");

        numberBinary[lastZeroIndex] = "1";
        numberBinary[lastZeroIndex + 1] = "0";

        return parseInt(numberBinary.join(""), 2);
    });
};

// 테스트케이스
console.log(solution([2, 7])); // [3, 11]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [2, 3, 5, 5, 6, 7, 11]
console.log(solution([0])); // [1]
