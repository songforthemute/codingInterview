// 3536. Maximum Product of Two Digits
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    /**
     * 목표:
     *  - n의 자릿수들 중에서 두 개를 뽑아 곱한 최댓값 구하기
     * 고민:
     *  1. 무엇을 재사용할 수 있는가?
     *    - 두 수의 곱이니까 n * m 이라고 하면, n/m을 재사용할 수 있다.
     *      - n === m 일 수도 있고, n !== m 일 수도 있다.
     *      - 순서는 의미없다. 4*5와 5*4는 같다.
     *    - 조합 문제같지만, 최댓값 구하기다.
     *      - 가령 2*10, 4*5는 같다.
     *  2. 시간복잡도
     *   - n의 자릿수는 최대 10개이므로, O(n^2) 안쪽이라면 괜찮다.
     *  3. 공간복잡도
     *    - 공간복잡도에서 문제가 될 부분은 이 문제에선 없는 것 같다.
     * 접근:
     *  - 당장 문자열 -> 배열 -> 내림차순 정렬 -> 맨 앞 인덱스 두 개를 곱 -> 반환
     */
    const stringified = String(n);
    const array = stringified.split("").map((v) => Number(v));
    const sorted = array.sort((a, b) => b - a);
    const result = sorted[0] * sorted[1];
    return result;
};
