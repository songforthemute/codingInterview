// Lv. 0 조건에 맞게 수열 변환하기 2

/**
 * @param {number[]} arr 정수 배열
 * @returns {number} 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값
 */

const solution = (arr) => {
    let cnt = 0;

    const isEqual = (curr) => {
        const origin = [...curr];

        arr = curr.map((v) => {
            if (v > 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 !== 0) return v * 2 + 1;
            return v;
        });

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== origin[i]) return;
        }

        return true;
    };

    while (!isEqual(arr)) cnt++;

    return cnt;
};

// test cases
console.log(solution([1, 2, 3, 100, 99, 98])); // 5
