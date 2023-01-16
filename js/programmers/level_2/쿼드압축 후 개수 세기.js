// Lv. 2 쿼드압축 후 개수 세기

/**
 * @param {number[][]} arr 압축하려는 2차원 배열
 * @returns {number[]} 압축 후 배열에 최종적으로 남는 0과 1의 개수
 */

const solution = (arr) => {
    const result = [0, 0];

    const quadZip = (array) => {
        if (array.every((v) => v.every((v) => v === 0))) {
            result[0]++;
            return;
        }

        if (array.every((v) => v.every((v) => v === 1))) {
            result[1]++;
            return;
        }

        if (array.length === 2) {
            array.forEach((row) =>
                row.forEach((elem) => (elem ? result[1]++ : result[0]++))
            );

            return;
        }

        let quadrant1 = array.splice(0, array.length / 2);
        let quadrant2 = quadrant1.map((v) =>
            v.splice(array.length / 2, array.length / 2)
        );
        let quadrant3 = array;
        let quadrant4 = quadrant3.map((v) =>
            v.splice(array.length / 2, array.length / 2)
        );

        quadZip(quadrant1);
        quadZip(quadrant2);
        quadZip(quadrant3);
        quadZip(quadrant4);
    };

    quadZip(arr);

    return result;
};

// 테스트케이스
console.log(
    solution([
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ])
); // [4,9]
console.log(
    solution([
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 1, 1],
    ])
); // [10,15]
