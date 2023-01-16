// Lv. 3 보석 쇼핑

/**
 * @param {string[]} gems 진열대 번호 순서대로 보석들의 이름이 저장된 배열
 * @return {number[]} 모든 보석을 하나 이상 포함하는 가장 짧은 구간
 */

const solution = (gems) => {
    const { size } = new Set(gems);

    if (size === 1) return [1, 1];
    if (size === gems.length) return [1, gems.length];

    const map = new Map();
    let start = 1;
    let end = gems.length;

    for (let i = 0; i < gems.length; i++) {
        if (map.has(gems[i])) map.delete(gems[i]);

        map.set(gems[i], i);

        if (map.size === size) {
            let newStart = map.values().next().value + 1;
            let newEnd = i + 1;

            if (end - start > newEnd - newStart) {
                start = newStart;
                end = newEnd;
            }
        }
    }

    return [start, end];
};

// test cases
console.log(
    solution([
        "DIA",
        "RUBY",
        "RUBY",
        "DIA",
        "DIA",
        "EMERALD",
        "SAPPHIRE",
        "DIA",
    ])
); // [3,7]
// console.log(solution(["AA", "AB", "AC", "AA", "AC"])); // [1,3]
// console.log(solution(["XYZ", "XYZ", "XYZ"])); // [1,1]
// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])); // [1,5]
// console.log(solution([1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 2, 3, 1])); // [12,15]
