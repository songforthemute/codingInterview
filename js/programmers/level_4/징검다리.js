// Lv. 4 징검다리

/**
 * @param {number} distance 출발지점부터 도착지점까지의 거리
 * @param {number[]} rocks 바위들이 있는 위치를 담은 배열
 * @param {number} n 제거할 바위의 수
 * @returns {number} 바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중 가장 큰 값
 */

function solution(distance, rocks, n) {
    rocks = [0, ...rocks.sort((a, b) => a - b), distance];

    let [left, right] = [0, distance];

    while (left <= right) {
        const median = Math.floor((left + right) / 2);
        console.log(left, median, right);
        let [curr, chance] = [0, 0]; // starting point

        for (let i = 1; i < rocks.length; i++) {
            // getting distance of 'next rock(rocks[i]) - current rock'
            // so, erase-able rock if smaller than median
            if (rocks[i] - curr < median) {
                // break if no longer has a chance
                if (++chance > n) break;
            } else {
                // erase-unable rock, transfer current location
                curr = rocks[i];
            }
        }

        // if no longer has a chance, modify the range by binary search
        if (chance > n) right = median - 1;
        else left = median + 1;

        console.log(left, right);
    }

    return right;
}

// Test Cases
console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 4
