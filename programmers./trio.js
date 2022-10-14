// Lv. 1 삼총사

/**
 * @param {number[]} number
 * @returns {number}
 */

function solution(number) {
    let count = 0;

    const DFS = (arr, idx) => {
        if (arr[0] + arr[1] + arr[2] === 0 && arr.length === 3) {
            count++;
            return;
        }

        if (arr.length < 3) {
            for (let j = idx + 1; j < number.length; j++) {
                DFS([...arr, number[j]], j);
            }
        }
    };

    for (let i = 0; i < number.length - 2; i++) {
        DFS([number[i]], i);
    }

    return count;
}
