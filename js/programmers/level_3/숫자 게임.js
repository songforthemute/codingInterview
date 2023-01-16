// Lv. 3 숫자 게임

/**
 * @param {number[]} A A팀원들이 부여받은 수가 출전 순서대로 나열되어있는 배열
 * @param {number[]} B i번째 원소가 B팀의 i번 팀원이 부여받은 수를 의미하는 배열
 * @returns {number} B팀원들이 얻을 수 있는 최대 승점
 */

const solution = (A, B) => {
    if (Math.min(...A) >= Math.max(...B)) return 0;

    let score = 0;

    let descA = A.sort((a, b) => b - a);
    let descB = B.sort((a, b) => b - a);

    let iA = 0;
    let iB = 0;

    while (iB < B.length && iA < A.length) {
        if (descB[iB] > descA[iA]) {
            iA++;
            iB++;
            score++;
        } else {
            iA++;
        }
    }

    return score;
};

// 테스트케이스
console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
