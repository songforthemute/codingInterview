// 73. Set Matrix Zeroes
const setZeroes = (matrix) => {
    const checkZero = [];
    const copy = [...matrix];

    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[i].length; j++) {
            if (copy[i][j] === 0) checkZero.push([i, j]);
        }
    }

    for (let i = 0; i < checkZero.length; i++) {
        const [x, y] = checkZero[i];

        for (let j = 0; j < copy[0].length; j++) {
            copy[x][j] = 0;
        }

        for (let j = 0; j < copy.length; j++) {
            copy[j][y] = 0;
        }
    }

    return copy;
};
