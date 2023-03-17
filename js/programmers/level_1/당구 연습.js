// Lv. 1 당구 연습

/**
 * @param {number} m 당구대의 가로 길이
 * @param {number} n 당구대의 세로 길이
 * @param {number} startX 머쓱이가 쳐야 하는 공이 놓인 위치 좌표를 나타내는 정수 1
 * @param {number} startY 머쓱이가 쳐야 하는 공이 놓인 위치 좌표를 나타내는 정수 2
 * @param {number[][]} balls 매 회마다 목표로 해야하는 공들의 위치 좌표를 나타내는 정수 쌍들이 들어 있는 2차원 정수 배열
 * @returns {number[]} 적어도 벽에 한 번은 맞춘 후 목표 공에 맞힌다고 할 때, 각 회마다 머쓱이가 친 공이 굴러간 거리의 최솟값의 제곱을 담은 배열
 */

/**
 * 상단 타격 (X, 10)
 * 하단 타격 (X, 0)
 * 좌단 타격 (0, Y)
 * 우단 타격 (10, Y)
 */

const solution = (m, n, startX, startY, balls) => {
    const getDistance = (x, y) =>
        [x, y].reduce((pre, cur) => pre + cur ** 2, 0);

    const hitTop = ([arriveX, arriveY]) => {
        // if arrive coord is located at the line of going to wall,
        // so will be break before arriving wall
        if (arriveX === startX && arriveY > startY) return Infinity;

        const x = Math.abs(arriveX - startX);
        const y = 2 * n - arriveY - startY;
        return getDistance(x, y);
    };

    const hitBot = ([arriveX, arriveY]) => {
        // if arrive coord is located at the line of going to wall,
        // so will be break before arriving wall
        if (arriveX === startX && startY > arriveY) return Infinity;

        const x = Math.abs(arriveX - startX);
        const y = arriveY + startY;
        return getDistance(x, y);
    };

    const hitLeft = ([arriveX, arriveY]) => {
        // if arrive coord is located at the line of going to wall,
        // so will be break before arriving wall
        if (arriveY === startY && startX > arriveX) return Infinity;

        const x = arriveX + startX;
        const y = Math.abs(arriveY - startY);
        return getDistance(x, y);
    };

    const hitRight = ([arriveX, arriveY]) => {
        // if arrive coord is located at the line of going to wall,
        // so will be break before arriving wall
        if (arriveY === startY && arriveX > startX) return Infinity;

        const x = 2 * m - arriveX - startX;
        const y = Math.abs(arriveY - startY);
        return getDistance(x, y);
    };

    return balls.map((ball) =>
        Math.min(hitTop(ball), hitBot(ball), hitLeft(ball), hitRight(ball))
    );
};

// test cases
console.log(
    solution(10, 10, 3, 7, [
        [7, 7],
        [2, 7],
        [7, 3],
    ])
); // [52,37,116]
