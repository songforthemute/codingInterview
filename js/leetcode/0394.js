// 394. Decode String - Medium

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }

        let pop = stack.pop();
        let chunk = "";

        while (pop !== "[") {
            chunk = pop + chunk;
            pop = stack.pop();
        }

        // waste the '[', and pop newly
        pop = stack.pop();
        let multiply = "";

        // count number
        // the reason using 'while' cuz the case over 10
        while (0 <= pop && pop <= 9) {
            multiply = pop + multiply;
            pop = stack.pop();
        }

        // if prefix is existed
        pop ? stack.push(pop) : null;
        // push chunk after multiply
        stack.push(chunk.repeat(Number(multiply)));
    }

    return stack.join("");
};

// TEST CASES
console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[a10[c]]")); // "accccccccccacccccccccc"
