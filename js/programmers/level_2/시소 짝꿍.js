// Lv. 2 시소 짝꿍

/**
 * @param {number[]} weights 사람들의 몸무게 목록
 * @return {number} 존재하는 시소 짝꿍의 쌍 개수
 */

const solution = (weights) => {
    let result = 0;
    const weightMap = new Map();

    weights.forEach((weight) => {
        if (!weightMap.has(weight)) {
            weightMap.set(weight, 1);
            return;
        }

        result += weightMap.get(weight); // same weight
        weightMap.set(weight, weightMap.get(weight) + 1); // counting for after when calculate combination
    });

    const seatMap = new Map(); // for combination

    for (const w of weightMap.keys()) {
        [w * 2, w * 3, w * 4].forEach((cand) => {
            if (!seatMap.has(cand)) seatMap.set(cand, weightMap.get(w));
            else {
                result += weightMap.get(w) * seatMap.get(cand); // counting that count of combinations
                seatMap.set(cand, weightMap.get(w) + seatMap.get(cand)); // memorize for after cases
            }
        });
    }

    return result;
};

// test cases
console.log(solution([100, 180, 360, 100, 270])); // 4
