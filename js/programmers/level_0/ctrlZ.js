// Lv. 0 컨트롤 제트

/**
 * @param {string} s
 * @return {number}
 */

const solution = (s) => {
    const numStack = [];

    for (const char of s.split(" ")) {
        if (char !== "Z") {
            numStack.push(Number(char));
        } else if (numStack.length > 0) {
            numStack.pop();
        }
    }

    return numStack.length > 0
        ? numStack.reduceRight((prev, curr) => prev + curr)
        : 0;
};
