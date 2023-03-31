// Lv. 2 과제 진행하기

/**
 * @param {string[][]} plans 과제 계획을 담은 이차원 문자열 배열
 * @return {string[]} 과제를 끝낸 순서대로 이름을 담은 배열
 */

const solution = (plans) => {
    // [subjectName, startTime, restTime]
    const restPlans = plans
        .map((v) => {
            const [subject, start, play] = v;
            const [h, m] = start.split(":").map((w) => Number(w));
            const convertedStart = h * 60 + m;

            return [subject, convertedStart, Number(play)];
        })
        .sort((a, b) => a[1] - b[1]);

    const stack = [];
    const result = [];

    let current = restPlans[0][1];

    while (restPlans.length || stack.length) {
        // No existing newPlan anymore
        if (!restPlans.length) {
            result.push(stack.pop()[0]);
            continue;
        }

        // There is a plan in progress && current === end time of the plan
        if (stack.length && --stack[stack.length - 1][2] === 0) {
            result.push(stack.pop()[0]);
        }

        // current === when start new plan
        if (current++ === restPlans[0][1]) {
            stack.push(restPlans.shift());
        }
    }

    return result;
};

// test cases
console.log(
    solution([
        ["korean", "11:40", "30"],
        ["english", "12:10", "20"],
        ["math", "12:30", "40"],
    ])
); // ["korean", "english", "math"]
console.log(
    solution([
        ["science", "12:40", "50"],
        ["music", "12:20", "40"],
        ["history", "14:00", "30"],
        ["computer", "12:30", "100"],
    ])
); // ["science", "history", "computer", "music"]
console.log(
    solution([
        ["aaa", "12:00", "20"],
        ["bbb", "12:10", "30"],
        ["ccc", "12:40", "10"],
    ])
); // ["bbb", "ccc", "aaa"]
