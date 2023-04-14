// Lv. 2 연속 펄스 부분 수열의 합

/**
 * @param {number[]} sequence 정수 수열
 * @return {number} 연속 펄스 부분 수열의 합 중 가장 큰 것
 */

const solution = (sequence) => {
    const sums = Array(sequence.length + 1).fill(0);

    let max = -Infinity;
    let min = Infinity;

    sums.forEach((v, i) => {
        // get the prefix sum applying the pulse number
        sums[i + 1] = v + sequence[i] * Math.pow(-1, i);

        // update minimum or maximum
        if (v < min) min = v;
        if (v > max) max = v;
    });

    // return diff between the maximum and minimum
    // cuz each prefix sum be located in sums array
    return max - min;
};

// test cases
console.log(solution([2, 3, -6, 1, 3, -1, 2, 4])); // 10
