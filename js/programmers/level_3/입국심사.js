// Lv. 3 입국심사

/**
 * @param {number} n 입국심사를 기다리는 사람 수
 * @param {number[]} times 각 심사관이 한 명을 심사하는데 걸리는 시간
 * @returns {number}
 */

const solution = (n, times) => {
    if (n === 1) return Math.min(...times);
    if (times.length === 1) return n * times[0];

    let minTime = 1; // the minimum time that everyone passes
    let maxTime = n * Math.max(...times); // the maximum time that everyone passes

    while (minTime <= maxTime) {
        // try to calculate how many people can pass
        let currentTime = Math.floor((minTime + maxTime) / 2);
        let passAble = times.reduceRight(
            (prev, time) => prev + Math.floor(currentTime / time),
            0
        );

        // if passable people bigger/smaller than requirement
        if (passAble >= n) maxTime = currentTime - 1;
        else minTime = currentTime + 1;
    }

    return minTime;
};

// test cases
console.log(solution(6, [7, 10])); // 28
console.log(solution(10, [6, 8, 10])); // 30
