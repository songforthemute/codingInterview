// Lv. 1 과일 장수

/**
 * @param {number} k
 * @param {number} m
 * @param {number[]} score
 * @return {number}
 */

const solution = (k, m, score) => {
    const result = [];
    const map = {};

    score.forEach((v) => (map[v] ? map[v]++ : (map[v] = 1)));

    const maxBox = Math.floor(score.length / m);
    const set = [...Object.keys(map)];

    for (let i = 0; i < maxBox; i++) {
        const newBox = [];

        while (newBox.length < m) {
            newBox.push(set[set.length - 1]);
            map[set[set.length - 1]]--;

            if (map[set[set.length - 1]] === 0) {
                set.pop();
            }
        }

        result.push(newBox);
    }

    return result.reduceRight((prev, curr) => prev + Math.min(...curr) * m, 0);
};
