// Lv. 2 롤케이크 자르기

/**
 * @param {number[]} topping 롤케이크에 올려진 토핑들의 번호를 저장한 정수 배열
 * @return {number} 롤케이크를 공평하게 자르는 방법의 수
 */

function solution(topping) {
    let ways = 0;

    let left = new Map();
    let right = new Map();

    const add = (map = new Map(), key = 0) => {
        map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
    };
    const minus = (map = new Map(), key = 0) => {
        map.get(key) > 1 ? map.set(key, map.get(key) - 1) : map.delete(key);
    };

    topping.forEach((v) => add(left, v));

    let pointer = topping.length - 1;

    while (pointer !== -1 && left.size >= right.size) {
        if (left.size === right.size) ways++;

        let current = topping[pointer--];

        minus(left, current);
        add(right, current);
    }

    return ways;
}

// test cases
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
