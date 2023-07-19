// Lv. 2 우박수열 정적분

/**
 * @param {number} k 우박수의 초항
 * @param {number[][]} ranges 정적분을 구하는 구간들의 목록
 * @returns {number[]}
 */

function solution(k, ranges) {
    // for record y coords
    const collatzSet = [k];

    // process 'Collatz' computing
    while (k !== 1) {
        k = k % 2 === 0 ? k / 2 : k * 3 + 1;
        collatzSet.push(k);
    }

    const len = collatzSet.length - 1;
    const getArea = (y1, y2) => {
        return y1 + (y2 - y1) / 2;
    };

    return ranges.map(([s, e]) => {
        // start is bigger than end
        if (s > len + e) return -1;
        // start is as same as end
        if (s === len + e) return 0;

        // getting the area from start to end
        let sum = 0;

        for (let i = s; i < len + e; i++) {
            sum += getArea(collatzSet[i], collatzSet[i + 1]);
        }

        return sum;
    });
}

// Test Cases
console.log(
    solution(5, [
        [0, 0],
        [0, -1],
        [2, -3],
        [3, -3],
    ])
); // [33.0,31.5,0.0,-1.0]
