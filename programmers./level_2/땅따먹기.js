// Lv. 2 땅따먹기

/**
 *
 * @param {number[][]} land
 * @returns
 */

const solution = (land) => {
    const dp = [[...land[0]]];

    const Search = (prevStage) => {
        const newStage = [];
        const col = dp.length;

        land[col].forEach((currScore, currRow) => {
            const temp = [];

            prevStage.forEach((prevScore, prevRow) => {
                if (prevRow !== currRow) {
                    temp.push(prevScore + currScore);
                }
            });

            newStage.push(Math.max(...temp));
        });

        dp.push(newStage);
    };

    while (dp.length !== land.length) {
        Search(dp[dp.length - 1]);
    }

    return Math.max(...dp[dp.length - 1]);
};
