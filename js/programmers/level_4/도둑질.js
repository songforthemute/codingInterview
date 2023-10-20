// Lv. 4 도둑질

/**
 *
 * @param {number[]} money 각 집에 있는 돈이 담긴 배열
 * @returns {number} 도둑이 훔칠 수 있는 돈의 최댓값
 */

function solution(money) {
    const dp1 = money.slice(0, money.length - 1); // 0 ~ money.length-2
    const dp2 = money.slice(1); // 1 ~ money.length-1

    for (let i = 2; i < money.length - 1; i++) {
        dp1[i] += Math.max(dp1[i - 2], dp1[i - 3] || 0);
        dp2[i] += Math.max(dp2[i - 2], dp2[i - 3] || 0);
    }

    return Math.max(
        dp1[dp1.length - 1],
        dp1[dp1.length - 2],
        dp2[dp2.length - 1],
        dp2[dp2.length - 2]
    );
}

// TEST_CASES
console.log(solution([1, 2, 3, 1])); // 4
console.log(solution([1, 2, 3])); // 3
