// Lv. 2 두 원 사이의 정수 쌍

/**
 * @param {number} r1 반지름을 나타내는 두 정수1
 * @param {number} r2 반지름을 나타내는 두 정수2
 * @returns {number} 두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수
 */

const solution = (r1, r2) => {
    let count = 0;

    // get points of a quadrant, and multiply 4
    for (let y = 1; y <= r2; y++) {
        // c^2 - b^2 = a^2
        const startX = Math.ceil(Math.sqrt(r1 ** 2 - y ** 2)) || 0;
        const endX = Math.floor(Math.sqrt(r2 ** 2 - y ** 2));

        count += Math.abs(startX - endX) + 1;
    }

    return count * 4;
};

// test cases
console.log(solution(2, 3)); // 20
console.log(solution(10, 20)); // 952
