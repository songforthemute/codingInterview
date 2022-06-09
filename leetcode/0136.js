// 136. Single Number
const singleNumber = (nums) => {
    const visited = {};
    let result = 0;

    for (const num of nums) {
        if (!visited[num]) {
            visited[num] = 1;
            result += num;
        } else {
            visited[num]--;
            result -= num;
        }
    }

    return result;
};

/**
 * // 136. Single Number
 * const singleNumber = (nums) => {
 *     const visited = {};
 *
 *     for (const num of nums) {
 *         !visited[num] ? (visited[num] = 1) : visited[num]++;
 *         if (visited[num] === 2) delete visited[num];
 *     }
 *
 *     return Number(Object.keys(visited)[0]);
 * };
 */
