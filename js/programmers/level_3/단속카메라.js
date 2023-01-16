// Lv. 3 단속카메라

/**
 * @param {number[][]} routes [고속도로에 진입한 지점, 고속도로에서 나간 지점], 고속도로를 이동하는 차량의 경로
 * @returns {number} 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 필요한 최소 카메라 대 수
 */

const solution = (routes) => {
    const cars = routes.sort((a, b) => {
        let [start1, end1] = a;
        let [start2, end2] = b;

        if (start1 !== start2) return start1 - start2;
        else return end1 - end2;
    });

    let cams = 0;
    let prev = -Infinity;

    for (const car of cars) {
        let [start, end] = car;

        if (prev < start) {
            cams++;
            prev = end;
            continue;
        }

        if (prev > end) {
            prev = end;
        }
    }

    return cams;
};

// 테스트케이스
console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
); // 2
console.log(
    solution([
        [-20, 10],
        [-19, 10],
        [-18, 9],
        [10, 11],
    ])
); // 2
