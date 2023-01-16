// Lv. 0 등수 매기기

/**
 * @param {number[][]} score
 * @return {number[]}
 */

const solution = (score) => {
    const average = [...score]
        .map((v, i) => [v.reduceRight((prev, curr) => prev + curr, 0), i])
        .sort((a, b) => b[0] - a[0]);

    const result = new Array(score.length);
    let prevMax = -Infinity;
    let rank = 0;
    let dupCount = 1;

    for (const score of average) {
        if (score[0] !== prevMax) {
            prevMax = score[0];

            rank += dupCount;
            dupCount = 1;
        } else {
            dupCount++;
        }

        result[score[1]] = rank;
    }

    return result;
};
