// Lv. 0 배열 만들기 6

/**
 * @param {number[]} arr 0과 1로만 이루어진 정수 배열
 * @returns {number[]} 작업을 마친 후 만들어진 stk을 return
 */

const solution = (arr) => {
    let i = 0;

    const stk = [];

    while (i < arr.length) {
        stk.length && stk[stk.length - 1] === arr[i]
            ? stk.pop()
            : stk.push(arr[i]);

        i++;
    }

    return stk.length ? stk : [-1];
};

// test cases
console.log(solution([0, 1, 1, 1, 0])); // [0,1,0]
console.log(solution([0, 1, 0, 1, 0])); // [0,1,0,1,0]
