// Lv. 0 첫 번째로 나오는 음수

/**
 * @param {number[]} num_list 정수 리스트
 * @returns {number} 첫 번째로 나오는 음수의 인덱스를 반환
 */

const solution = (num_list) => {
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) return i;
    }

    return -1;
};

// test cases
console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
