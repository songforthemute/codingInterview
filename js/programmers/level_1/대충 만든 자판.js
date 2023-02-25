// Lv. 1 대충 만든 자판

/**
 * @param {string[]} keymap 1번 키부터 차레대로 할당된 문자들이 순서대로 담긴 문자열 배열
 * @param {string[]} targets 입력하려는 문자열들이 담긴 문자열 배열
 * @returns {number[]} 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 담은 배열
 */

const solution = (keymap, targets) => {
    const map = new Map();
    const result = [];

    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            if (!map.has(key[i])) map.set(key[i], i + 1);
            else map.set(key[i], Math.min(i + 1, map.get(key[i])));
        }
    }

    for (const target of targets) {
        let count = 0;

        for (let i = 0; i < target.length; i++) {
            if (!map.has(target[i])) {
                count = -1;
                break;
            }

            count += map.get(target[i]);
        }

        result.push(count);
    }

    return result;
};

// test cases
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
