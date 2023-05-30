// Lv. 0 무작위로 K개의 수 뽑기

/**
 * @param {number[]} arr 정수 배열
 * @param {number} k 무작위의 수
 * @returns {number[]} 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 완성될 배열을 return
 */

const solution = (arr, k) => {
    const set = new Set(arr);

    return set.size === k
        ? [...set]
        : set.size > k
        ? [...set].slice(0, k)
        : [...set, ...Array(k - set.size).fill(-1)];
};

// test cases
console.log(solution([0, 1, 1, 2, 2, 3], 3)); // [0,1,2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0,1,-1,-1]
