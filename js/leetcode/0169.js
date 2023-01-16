// 169. Majority Element
const majorityElement = (nums) => {
    const map = {};
    let max = -Infinity;
    let result;

    for (const num of nums) {
        !map[num] ? (map[num] = 1) : map[num]++;
        if (map[num] > max) {
            max = map[num];
            result = num;
        }
    }

    return result;
};
