// Lv. 2 삼각 달팽이

/**
 * @param {number} n 삼각형의 높이
 * @returns {number[]} 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열
 */

const solution = (n) => {
    if (n === 1) return [1];

    const matrix = new Array(n).fill();

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(i + 1).fill(null);
    }

    let currNumber = 1;
    let totalProgress = n;
    let direction = "down";

    let i = -1,
        j = 0;

    while (totalProgress !== 0) {
        let currProgress = 0;

        while (currProgress < totalProgress) {
            if (direction === "down") i++;
            else if (direction === "right") j++;
            else {
                i--, j--;
            }

            matrix[i][j] = currNumber++;
            currProgress++;
        }

        if (direction === "down") direction = "right";
        else if (direction === "right") direction = "up";
        else direction = "down";

        totalProgress--;
    }

    return matrix.flat();
};

// 테스트케이스
console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
console.log(solution(7));
// [
//     1,  2, 18,  3, 19, 17,  4, 20,
//    27, 16,  5, 21, 28, 26, 15,  6,
//    22, 23, 24, 25, 14,  7,  8,  9,
//    10, 11, 12, 13
//  ]
