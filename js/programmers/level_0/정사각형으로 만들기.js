// Lv. 0 정사각형으로 만들기

/**
 * @param {number[][]} arr 이차원 정수 배열
 * @returns {number[][]} arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열
 */

const solution = (arr) => {
    if (arr.length > arr[0].length)
        return arr.map((v) => [
            ...v,
            ...Array(arr.length - arr[0].length).fill(0),
        ]);

    if (arr.length < arr[0].length)
        return [
            ...arr,
            ...Array.from(Array(arr[0].length - arr.length), () =>
                Array(arr[0].length).fill(0)
            ),
        ];

    return arr;
};

// test cases
console.log(
    solution([
        [572, 22, 37],
        [287, 726, 384],
        [85, 137, 292],
        [487, 13, 876],
    ])
); // [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
console.log(
    solution([
        [57, 192, 534, 2],
        [9, 345, 192, 999],
    ])
); // [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
