// Lv. 2 택배상자

/**
 * @param {number[]} order 택배 기사님이 원하는 상자 순서를 나타내는 정수 배열
 * @returns {number} 영재가 실을 수 있는 상자의 수
 */

const solution = (order) => {
    if (order.length === 1) return 1;

    let n = 0;
    const stack = [];

    for (let i = 1; i <= order.length; i++) {
        stack.push(i);

        while (stack.length && stack[stack.length - 1] === order[n]) {
            n++;
            stack.pop();
        }
    }

    return n;
};

// test cases
console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5
console.log(solution([1])); // 1
