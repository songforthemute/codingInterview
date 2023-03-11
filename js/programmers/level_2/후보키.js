// Lv. 2 후보키

/**
 * @param {string[][]} relation 릴레이션을 나타내는 문자열 배열 [학번, 이름, 전공, 학년]
 * @return {number} 후보 키의 개수
 */

const solution = (relation) => {
    const combined = [];

    const combination = (stage = 1, array = [], index = 0) => {
        if (array.length === stage) {
            combined.push(array);
            return;
        }

        for (let i = index; i < relation[0].length; i++) {
            combination(stage, [...array, i], i + 1);
        }
    };

    for (let i = 1; i <= relation[0].length; i++) {
        combination(i);
    }

    let keys = 0;
    const prevKeySet = [];

    for (const keySet of combined) {
        const hasMiniality = !prevKeySet.some((prevKeys) =>
            prevKeys.every((prevKey) => keySet.includes(prevKey))
        );

        if (hasMiniality) {
            // apply filter by current key
            const currentSet = new Set(
                relation.flatMap((row) =>
                    keySet.map((key) => row[key]).join("")
                )
            );

            // if current key is can alternative
            if (currentSet.size === relation.length) {
                prevKeySet.push(keySet);
                keys++;
            }
        }
    }

    return keys;
};

// test cases
console.log(
    solution([
        ["100", "ryan", "music", "2"],
        ["200", "apeach", "math", "2"],
        ["300", "tube", "computer", "3"],
        ["400", "con", "computer", "4"],
        ["500", "muzi", "music", "3"],
        ["600", "apeach", "music", "2"],
    ])
); // 2
