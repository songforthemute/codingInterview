// Lv. 2 거리두기 확인하기

/**
 * @param {string[][]} places 자리에 앉은 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열
 * @return {number[]} 각 대기실별로 거리두기를 지키고 있으면 1, 한 명이라도 지키지 않고 있으면 0을 담아 반환할 배열
 */

const solution = (places) => {
    // get Manhattan distance, but this must more than 3, no less than 2
    const getManhattanDistance = ([x1, y1], [x2, y2]) =>
        Math.abs(x1 - x2) + Math.abs(y1 - y2);

    // check distancing if manhattan distance is 2
    const checkDistancing = (...locations) =>
        locations.every((location) => location === "X");

    // check
    const checkPlace = (map = []) => {
        const players = [];

        // get player's location
        map.forEach((seat, x) => {
            for (let y = 0; y < seat.length; y++) {
                if (seat[y] === "P") players.push([x, y]);
            }
        });

        // check manhattan distance
        for (let i = 0; i < players.length - 1; i++) {
            for (let j = i + 1; j < players.length; j++) {
                let md = getManhattanDistance(players[i], players[j]);

                // case: distancing completely
                if (md > 2) continue;
                // case: distancing failure so return 0
                if (md < 2) return 0;

                let [x1, y1] = players[i];
                let [x2, y2] = players[j];

                // case: need to check deeper
                if (x1 - x2 === 0) {
                    // same rows, so compare columns
                    if (!checkDistancing(map[x1][y1 + 1])) return 0;
                } else if (y1 - y2 === 0) {
                    // same columns, so compare rows
                    if (!checkDistancing(map[x1 + 1][y1])) return 0;
                } else {
                    // one away diagonally, so compare between each
                    if (!checkDistancing(map[x1][y2], map[x2][y1])) return 0;
                }
            }
        }

        return 1; // pass all so return 1
    };

    // calc each place
    return places.map((place) => checkPlace(place));
};

// test cases
console.log(
    solution([
        ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ])
); // [1, 0, 1, 1, 1]

console.log(solution([["POOOO", "OOPXP", "POOOO", "OOOOO", "OOOOO"]])); // [0]
