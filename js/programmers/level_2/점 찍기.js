// Lv. 2 점 찍기

/**
 * @param {number} k 정수
 * @param {number} d 원점과의 거리를 나타내는 정수
 * @return {number} 점이 총 찍히는 개수
 */

const solution = (k, d) => {
    const MAX_LEN = d ** 2;

    let dots = 0;

    for (let x = 0; x <= d; x += k) {
        // Get maximum `y` from current `x`
        let maxY = Math.floor((MAX_LEN - x ** 2) ** 0.5);

        // Add Coords
        dots += Math.floor(maxY / k) + 1;
    }

    return dots;
};

// test cases
console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26
