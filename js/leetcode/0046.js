// 46. Permutations
const permute = (nums) => {
    const result = [];

    const depthFirstSearch = (current, rest) => {
        if (rest.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            depthFirstSearch(
                [...current, rest[i]],
                [...rest.slice(0, i), ...rest.slice(i + 1)]
            );
        }
    };

    depthFirstSearch([], nums);

    return result;
};
