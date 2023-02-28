// Lv. 2 하노이의 탑

/**
 * @param {number} n 1번 기둥에 있는 원판의 개수
 * @returns {number[][]} n개의 원판을 3번 기둥으로 최소로 옮기는 방법
 */

const solution = (n) => {
    const result = [];

    // 중위순회
    const traversal = (current = n, start = 1, mid = 2, end = 3) => {
        if (current === 1) {
            result.push([start, end]);
            return;
        }

        traversal(current - 1, start, end, mid); // n-1 -> goto 'mid column'
        result.push([start, end]); // biggest column -> goto 'final column'
        traversal(current - 1, mid, start, end); // rest columns(n-1) of mid column -> goto 'final column'
    };

    traversal();

    return result;
};

// test cases
console.log(solution(2)); // [[1,2], [1,3], [2,3]]
