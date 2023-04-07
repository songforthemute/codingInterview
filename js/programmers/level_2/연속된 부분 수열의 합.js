// Lv. 2 연속된 부분 수열의 합

/**
 * @param {number[]} sequence 수열을 나타내는 정수 배열
 * @param {number} k 부분 수열의 합
 * @return {number[]} 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 담은 배열
 */

const solution = (sequence, k) => {
    let result = [0, Infinity]; // initial value
    let [left, right] = [0, 0]; // for two pointers
    let sum = sequence[0]; // initial value

    const checkOptimal = (start, end) => {
        let diff = result[1] - result[0] - (end - start);

        if (diff < 0) return;
        else if (diff > 0) result = [start, end];
        else {
            if (start < result[0]) result = [start, end];
        }
    };

    while (left <= right && right < sequence.length) {
        if (sum === k) checkOptimal(left, right);

        if (sum < k) sum += sequence[++right];
        else sum -= sequence[++left - 1];
    }

    return result;
};

// test cases
console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]
