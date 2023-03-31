// Lv. 1 추억 점수

/**
 * @param {string[]} name 그리워하는 사람의 이름을 담은 문자열 배열
 * @param {number[]} yearning 각 사람별 그리움 점수를 담은 정수 배열
 * @param {string[][]} photo 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열
 * @returns {number[]} 사진들의 추억 점수를 `photo`에 주어진 순서대로 담은 배열
 */

function solution(name, yearning, photo) {
    const map = new Map();

    name.forEach((v, i) => {
        map.set(v, yearning[i]);
    });

    return photo.map((shot) => {
        let temp = 0;

        shot.forEach((people) => {
            if (!map.has(people)) return;
            temp += map.get(people);
        });

        return temp;
    });
}

// Test cases
console.log(
    solution(
        ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [
            ["may", "kein", "kain", "radi"],
            ["may", "kein", "brin", "deny"],
            ["kon", "kain", "may", "coni"],
        ]
    )
); // [19, 15, 6]

console.log(
    solution(
        ["kali", "mari", "don"],
        [11, 1, 55],
        [
            ["kali", "mari", "don"],
            ["pony", "tom", "teddy"],
            ["con", "mona", "don"],
        ]
    )
); // [67, 0, 55]

console.log(
    solution(
        ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
    )
); // [5, 15, 0]
