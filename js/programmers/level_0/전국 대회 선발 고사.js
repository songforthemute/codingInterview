// Lv. 0 전국 대회 선발 고사

/**
 * @param {number[]} rank 각 학생들의 선발 고사 등수를 담은 정수 배열
 * @param {boolean[]} attendance 전국 대회 참여 가능 여부가 담긴 boolean 배열
 * @returns {number} 전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return
 */

const solution = (rank, attendance) => {
    return rank
        .map((v, i) => (attendance[i] ? v : Infinity))
        .sort((a, b) => a - b)
        .reduce(
            (_, __, ___, arr) =>
                rank.indexOf(arr[0]) * 10000 +
                rank.indexOf(arr[1]) * 100 +
                rank.indexOf(arr[2]),
            0
        );
};

// test cases
console.log(
    solution(
        [3, 7, 2, 5, 4, 6, 1],
        [false, true, true, true, true, false, false]
    )
); // 20403
