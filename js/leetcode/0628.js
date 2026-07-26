// 0628. Maximum Product of Three Numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    /**
     * 목표: 정수 배열이 주어지고, 세 개의 수의 곱에서 최댓값 만들기
     * 변수: 정수 구간에 음수가 있다.
     *
     * 고민:
     *  1. 정렬-추출의 최단순 그리디와 다르게 무엇을 더 고려해야 하나?
     *  - 음수가 있을 수 있다. 음수 * 음수 = 양수
     *  - 따라서 음수가 2개라면 그것도 연산이 달라질 수 있다.
     *  2. 시간 복잡도
     *  - 모두 비교할 필요가 없다. 정렬 후 맨 앞 3개, 맨 뒤 2개와 맨 앞 1개를 비교하면 된다.
     */

    const sorted = nums.sort((a, b) => b - a);
    const cand1 = sorted[0] * sorted[1] * sorted[2];
    const cand2 =
        sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2];
    return Math.max(cand1, cand2);
};
