// Lv. 4 무지의 먹방 라이브

/**
 * @param {number[]} food_times 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열
 * @param {number} k 방송이 중단된 시간
 * @returns {number} 몇 번 음식부터 다시 섭취하면 되는지 return
 */

function solution(food_times, k) {
    // [time, index + 1][]
    const foods = food_times
        .map((v, i) => [v, i + 1])
        .sort(([a], [b]) => a - b);

    let prevTime = 0;

    for (let i = 0; i < food_times.length; i++) {
        const [currTime] = foods[i]; // need to time at current
        const rest = food_times.length - i; // rest length of food_times
        const currConsume = (currTime - prevTime) * rest;

        // record the current consumption time
        prevTime = currTime;

        if (k < currConsume) {
            return foods.slice(i).sort((a, b) => a[1] - b[1])[k % rest][1];
        }

        k -= currConsume;
    }

    return -1;
}

console.log(solution([3, 4, 2], 6)); // 1
console.log(solution([4, 2, 3, 6, 7, 1, 5, 8], 16)); // 3
console.log(solution([4, 2, 3, 6, 7, 1, 5, 8], 27)); // 5
