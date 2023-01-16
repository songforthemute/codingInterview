// 739. Daily Temperatures
const dailyTemperatures = (temperatures) => {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
            for (let j = stack.length - 1; j >= 0; j--) {
                if (stack[j][0] < temperatures[i]) {
                    const idx = stack[j][1];
                    result[idx] = i - idx;
                    stack.pop();
                } else break;
            }
        }

        if (temperatures[i] < temperatures[i + 1]) result[i] = 1;
        else stack.push([temperatures[i], i]);
    }

    return result;
};
