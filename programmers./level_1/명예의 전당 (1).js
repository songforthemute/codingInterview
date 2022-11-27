// Lv. 1 명예의 전당 (1)

/**
 * @param {number} k
 * @param {number[]} score
 * @return {number[]}
 */

const solution = (k, score) => {
    const result = [];
    const honors = [];

    const sorting = (num) => {
        if (honors.length < k) {
            honors.push(num);
        } else {
            let minIndex = honors.indexOf(Math.min(...honors));
            if (honors[minIndex] < num) honors[minIndex] = num;
        }
    };

    for (let i = 0; i < score.length; i++) {
        sorting(score[i]);
        result.push(Math.min(...honors));
    }

    return result;
};
