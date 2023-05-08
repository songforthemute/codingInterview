// Lv. 0 5명씩

/**
 * @param {string[]} names 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트
 * @returns {string[]} 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트
 */

const solution = (names) => {
    return names.filter((_, i) => i % 5 === 0);
};

// test cases
console.log(
    solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
); // ["nami", "vex"]
