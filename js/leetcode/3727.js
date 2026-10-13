// 3727. Maximum Alternating Sum of Squares

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    /**
     * 절댓값이 큰 수 - 절댓값이 작은 수
     * 짝수 길이의 경우 그냥 하면 됨
     * 홀수 길이의 경우 하나를 가장 큰 수로 빼주어야 함
     * 
     * 주안점:
     * - nums가 정렬된 배열인지 아닌지 알 수가 없다
     * - 그럼 정렬하고 포인터 두개 쓰면서 좁혀가면?
     * - 다만 1/2 지점 인덱스가 절댓값으로서 최소를 보장하지 않는다
     * - 그럼 이분탐색으로 찾는다?
     * - 그럴바에 처음부터 기호를 바꿔놓고 정렬한다 >> 절댓값이면 기호는 의미없음
     */

    const converted = nums.map(v => Math.abs(v)).sort((a, b) => b - a);
    
    const isOdd = nums.length % 2 !== 0;

    let left = isOdd ? 1 : 0;
    let right = nums.length - 1;
    let result = isOdd ? converted[0] ** 2 : 0;

    while (left < right) {
        const big = converted[left] ** 2;
        const small = converted[right] ** 2;

        result += big - small;

        left++;
        right--;
    }

    return result;
};

// Test Cases
console.log(
    maxAlternatingSum(
        [1,2,3] // 12
    )
)

console.log(
    maxAlternatingSum(
        [1, -1, 2, -2, 3, -3] // 16
    )
)