// Lv. 2 [3차] 압축

/**
 * @param {string} msg
 * @return {number[]}
 */

const solution = (msg) => {
    const result = [];
    const dict = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    };

    let i = 0;
    let last = 27;

    const processing = (str, idx) => {
        if (msg[idx] !== undefined && dict[str + msg[idx + 1]] !== undefined) {
            return processing(str + msg[idx + 1], idx + 1);
        }

        result.push(dict[str]);
        dict[str + (msg[idx + 1] ?? "_")] = last;

        i = idx + 1;
        last++;

        return;
    };

    while (msg[i] !== undefined) {
        processing(msg[i], i);
    }

    return result;
};
