// Lv. 2 멀쩡한 사각형

/**
 * @param {number} W 가로의 길이
 * @param {number} H 세로의 길이
 * @return {number} 사용할 수 있는 정사각형의 개수
 */

const solution = (W, H) => {
    const total = W * H; // Get total

    // if sqaure is
    if (W === H) return total - W;

    // Get Greatest Common Divisor
    const big = Math.max(W, H);
    const small = W + H - big;
    const getGCD = (x, y) => (x % y === 0 ? y : getGCD(y, x % y));

    return total - (W + H - getGCD(big, small));
};

// test cases
console.log(solution(8, 12)); // 80
