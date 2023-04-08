// Lv. 2 광물 캐기

/**
 * @param {number[]} picks 마인이 갖고 있는 곡괭이의 개수를 나타내는 정수 배열
 * @param {string[]} minerals 광물들의 순서를 나타내는 문자열 배열
 * @return {number} 마인이 작업을 끝내기까지 필요한 최소한의 피로도
 */

const solution = (picks, minerals) => {
    const MAX_DIG_COUNT = picks.reduce((prev, curr) => prev + curr, 0) * 5;

    // if picks less than minerals
    if (MAX_DIG_COUNT < minerals.length) {
        minerals = minerals.slice(0, MAX_DIG_COUNT);
    }

    // check minerals - standard by stone
    const getFatigue = (mineral) => {
        if (mineral === "diamond") return 5 ** 2;
        else if (mineral === "iron") return 5 ** 1;
        else return 1;
    };

    const parts = [];
    let temp = [];

    for (let i = 0; i < minerals.length; i++) {
        temp.push(getFatigue(minerals[i]));

        if (temp.length === 5 || i === minerals.length - 1) {
            parts.push(temp);
            temp = [];
        }
    }

    // sort by fatigue
    parts.sort(
        (a, b) =>
            b.reduce((pre, cur) => pre + cur, 0) -
            a.reduce((pre, cur) => pre + cur, 0)
    );

    let result = 0;
    let pickIndex = 0;
    let partIndex = 0;

    while (pickIndex <= 2 && partIndex < parts.length) {
        if (picks[pickIndex] === 0) {
            pickIndex++;
            continue;
        } else {
            picks[pickIndex]--;
        }

        result += parts[partIndex++].reduce((pre, cur) => {
            if (pickIndex === 0) return pre + 1;
            else if (pickIndex === 1) return pre + Math.max(cur / 5, 1);
            else return pre + cur;
        }, 0);
    }

    return result;
};

// test cases
console.log(
    solution(
        [1, 3, 2],
        [
            "diamond",
            "diamond",
            "diamond",
            "iron",
            "iron",
            "diamond",
            "iron",
            "stone",
        ]
    )
); // 12
console.log(
    solution(
        [0, 1, 1],
        [
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "diamond",
            "iron",
            "iron",
            "iron",
            "iron",
            "iron",
            "diamond",
        ]
    )
); // 50
console.log(
    solution(
        [1, 1, 0],
        [
            "iron",
            "iron",
            "diamond",
            "iron",
            "stone",
            "diamond",
            "diamond",
            "diamond",
        ]
    )
); // 12
