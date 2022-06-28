// 타겟 넘버
const solution = (numbers, target) => {
    let result = 0;
    const DFS = (i, sum) => {
        if (i === numbers.length) {
            if (sum === target) {
                result++;
            }

            return;
        }

        DFS(i + 1, sum + numbers[i]);
        DFS(i + 1, sum - numbers[i]);
    };

    DFS(0, 0);

    return result;
};
