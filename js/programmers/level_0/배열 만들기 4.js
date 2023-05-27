// Lv. 0 배열 만들기 4

/**
 * @param {number[]} arr 정수 배열
 * @returns {number[]} 작업을 마친 후 만들어진 stk
 */

const solution = (arr) => {
    const result = [];
    let i = 0;

    while (i !== arr.length) {
        if (!result.length) result.push(arr[i++]);
        else
            result[result.length - 1] < arr[i]
                ? result.push(arr[i++])
                : result.pop();
    }

    return result;
};

// test cases
console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
