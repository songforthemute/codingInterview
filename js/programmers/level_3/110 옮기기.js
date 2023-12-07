// Lv. 3 110 옮기기

/**
 *
 * @param {string[]} s
 * @returns {string[]}
 */
function solution(s) {
    const has110 = (stack) => {
        if (stack.length < 3) return false;

        if (
            stack[stack.length - 3] === "1" &&
            stack[stack.length - 2] === "1" &&
            stack[stack.length - 1] === "0"
        )
            return true;

        return false;
    };

    const sliceByStack = (word) => {
        const stack = [];
        let counts = 0;

        for (let i = 0; i < word.length; i++) {
            stack.push(word[i]);

            if (has110(stack)) {
                stack.pop();
                stack.pop();
                stack.pop();

                counts++;
            }
        }

        return [stack.join(""), counts];
    };

    const transform = (word) => {
        const target = "110";
        const [sliced, count] = sliceByStack(word);
        const lastZero = sliced.lastIndexOf("0");

        if (!sliced.length) return target.repeat(count);
        if (lastZero === -1) return target.repeat(count) + sliced;

        return (
            sliced.slice(0, lastZero + 1) +
            target.repeat(count) +
            sliced.slice(lastZero + 1, sliced.length)
        );
    };

    return s.map(transform);
}

// TEST CASES
console.log(solution(["1110", "100111100", "0111111010"])); // ["1101","100110110","0110110111"]
console.log(solution(["0111111010"])); // ["0110110111"]
