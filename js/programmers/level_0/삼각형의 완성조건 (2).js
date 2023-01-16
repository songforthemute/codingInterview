// Lv. 0 삼각형의 완성조건 (2)

/**
 * @param {[number, number]} sides
 * @return {number}
 */

const solution = (sides) => {
    return (
        sides.reduceRight((prev, curr) => prev + curr) -
        Math.max(...sides) +
        Math.min(...sides) -
        1
    );
};

console.log(solution([1000, 501]));
