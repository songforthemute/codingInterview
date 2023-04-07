// Lv. 1 달리기 경주

/**
 * @param {number} players 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열
 * @param {number} callings 해설진이 부른 이름을 담은 문자열 배열
 * @return {number[]} 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 담은 배열
 */

const solution = (players, callings) => {
    const mapByIdx = {};
    const mapByVal = {};

    players.forEach((v, i) => {
        mapByIdx[v] = i;
        mapByVal[i] = v;
    });

    for (const call of callings) {
        let idx = mapByIdx[call];

        let toUpper = mapByVal[idx];
        let toLower = mapByVal[idx - 1];

        [mapByVal[idx], mapByVal[idx - 1]] = [mapByVal[idx - 1], mapByVal[idx]];
        [mapByIdx[toUpper], mapByIdx[toLower]] = [
            mapByIdx[toLower],
            mapByIdx[toUpper],
        ];
    }

    return Object.values(mapByVal);
};

// test cases
console.log(
    solution(
        ["mumu", "soe", "poe", "kai", "mine"],
        ["kai", "kai", "mine", "mine"]
    )
); // ["mumu", "kai", "mine", "soe", "poe"]
