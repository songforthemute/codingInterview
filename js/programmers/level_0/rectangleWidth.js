// Lv. 0 직사각형 넓이 구하기

/**
 * @param {number[][]} dots
 * @return {number}
 */

const solution = (dots) => {
    const xDots = dots.map((v) => v[0]);
    const yDots = dots.map((v) => v[1]);

    const xLine = Math.max(...xDots) - Math.min(...xDots);
    const yLine = Math.max(...yDots) - Math.min(...yDots);

    return xLine * yLine;
};
