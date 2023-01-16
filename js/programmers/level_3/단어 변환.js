// Lv. 3 단어 변환

/**
 * @param {string} begin
 * @param {string} target
 * @param {string[]} words
 * @return {number}
 */

const solution = (begin, target, words) => {
    if (!words.includes(target)) return 0;

    let result = Infinity;
    const stack = [[begin, [...words], 0]];

    const Search = (element) => {
        const [current, list, count] = element;

        if (count >= result) return;

        if (current === target) {
            result = count;
            return;
        }

        list.forEach((candidate) => {
            let temp = 0;

            for (let i = 0; i < candidate.length; i++) {
                if (candidate[i] === current[i]) {
                    temp++;
                }
            }

            if (temp === candidate.length - 1) {
                stack.push([
                    candidate,
                    list.filter((str) => str !== candidate),
                    count + 1,
                ]);
            }
        });
    };

    while (stack.length !== 0) {
        Search(stack.pop());
    }

    return result === Infinity ? 0 : result;
};
