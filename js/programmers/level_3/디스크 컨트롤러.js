// Lv. 3 디스크 컨트롤러

/**
 * @param {number[][]} jobs [작업이 요청되는 시점, 작업의 소요 시간]
 * @return {number} 작업의 요청부터 종료까지 걸린 시간의 평균을 줄이는 방법으로 처리했을 때 얻는 평균
 */

function solution(jobs) {
    let total = 0; // total for dividing
    let passed = 0; // for calc passed time
    let index = 0; // for counting completed

    const queue = [];
    const { length } = jobs;

    jobs.sort(([input1, req1], [input2, req2]) =>
        input1 !== input2 ? input1 - input2 : req1 - req2
    ); // sorting ascending order - input timing

    while (index !== length || queue.length) {
        if (index < length && jobs[index][0] <= passed) {
            queue.push(jobs[index++]);
            continue;
        }

        if (!queue.length) {
            passed = jobs[index][0];
            continue;
        }

        if (queue.length > 1) queue.sort(([i1, r1], [i2, r2]) => r1 - r2);

        let [input, require] = queue.shift();

        passed += require;
        total += passed - input;
    }

    return Math.floor(total / length);
}

// test cases
console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ])
); // 9

console.log(
    solution([
        [0, 3],
        [1, 9],
        [13, 6],
    ])
); // 6

console.log(solution([[10, 3]])); // 3

console.log(
    solution([
        [24, 10],
        [28, 39],
        [43, 20],
        [37, 5],
        [47, 22],
        [20, 47],
        [15, 2],
        [15, 34],
        [35, 43],
        [26, 1],
    ])
); // 72
