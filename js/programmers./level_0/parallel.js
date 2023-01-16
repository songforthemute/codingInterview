// Lv. 0 평행

/**
 * @param {[number, number][]} dots
 * @return {number}
 */

const solution = (dots) => {
    for (let i = 0; i < dots.length; i++) {
        const [xStart1, yStart1] = dots[i];

        for (let j = 0; j < dots.length; j++) {
            if (j === i) continue;

            const [xEnd1, yEnd1] = dots[j];
            const [[xStart2, yStart2], [xEnd2, yEnd2]] = dots.filter(
                (_, idx) => idx !== i && idx !== j
            );

            const isParallel =
                Math.abs((xStart1 - xEnd1) / (yStart1 - yEnd1)) ===
                Math.abs((xStart2 - xEnd2) / (yStart2 - yEnd2));

            if (isParallel) {
                return 1;
            }
        }
    }

    return 0;
};
