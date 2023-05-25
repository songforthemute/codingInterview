// Lv. 0 배열의 길이를 2의 거듭제곱으로 만들기

/**
 * @param {number[]} arr 정수 배열
 * @returns {number[]} arr에 최소한의 개수로 0을 추가한 배열을 return
 */

const solution = (arr) => {
    return [
        ...arr,
        ...Array(
            arr.reduce((pre) => (arr.length > pre ? pre * 2 : pre), 1) -
                arr.length
        ).fill(0),
    ];
};

// test cases
console.log(solution([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6,0,0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
