// 1337. The K Weakest Rows in a Matrix
const kWeakestRows = (mat, k) => {
    const arr = [];
    const result = [];

    for (let i = 0; i < mat.length; i++) {
        const n = mat[i].reduce((cur, prev) => cur + prev, 0);
        arr.push([n, i]);
    }

    arr.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else a[1] - b[1];
    });

    arr.slice(0, k).forEach((e) => result.push(e[1]));
    return result;
};
