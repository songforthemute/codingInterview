// Lv. 0 1로 만들기

/**
 * @param {number[]} num_list 정수들이 담긴 리스트
 * @returns {number} num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수
 */

const solution = (num_list) => {
    return num_list.reduce((pre, cur) => {
        let cnt = pre;

        while (cur !== 1) {
            cur % 2 ? (cur = (cur - 1) / 2) : (cur /= 2);
            cnt++;
        }

        return cnt;
    }, 0);
};

// test cases
console.log(solution([12, 4, 15, 1, 14])); // 11
