// Lv. 0 안전지대

/**
 * @param {number[]} board
 * @return {number}
 */

const solution = (board) => {
    const mine = [...board];

    for (let i = 0; i < mine.length; i++) {
        for (let j = 0; j < mine[i].length; j++) {
            if (mine[i][j] === 1) {
                for (let k = i - 1; k <= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        if (
                            mine[k] !== undefined &&
                            mine[k][l] !== undefined &&
                            mine[k][l] === 0
                        ) {
                            mine[k][l] = 2;
                        }
                    }
                }
            }
        }
    }

    return mine.flat().filter((v) => v === 0).length;
};
