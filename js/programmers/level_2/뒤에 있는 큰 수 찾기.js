// Lv. 2 뒤에 있는 큰 수 찾기

/**
 * @param {number[]} numbers 정수 배열
 * @return {number[]} 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열
 */

const solution = (numbers) => {
    const result = new Array(numbers.length).fill(-1);
    const stack = [];

    for (let i in numbers) {
        // current number is bigger than origin number of stack's index
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
            let position = stack.pop();

            result[position] = numbers[i];
        }

        // record current index
        stack.push(i);
    }

    return result;
};

// test cases
console.log(solution([2, 3, 3, 5])); // [3,5,5,-1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1,5,6,6,-1,-1]
