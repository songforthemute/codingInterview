// 118. Pascal's Triangle
const generate = (numRows) => {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    const result = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let left = 0;
        let right = left + 1;
        const parent = result[i - 1];
        const present = [1];

        while (right <= parent.length + 1) {
            if (right === parent.length) {
                present.push(1);
                break;
            } else {
                let elem = parent[left] + parent[right];
                present.push(elem);

                left++;
                right++;
            }
        }

        result.push(present);
    }

    return result;
};
