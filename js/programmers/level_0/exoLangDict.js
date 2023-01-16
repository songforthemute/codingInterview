// Lv. 0 외계어 사전

/**
 * @param {string[]} spell
 * @param {string[]} dic
 * @return {number}
 */

const solution = (spell, dic) => {
    const dict = {};

    for (const char of spell) {
        dict[char] = true;
    }

    for (const word of dic) {
        if (word.length !== spell.length) continue;

        const data = { ...dict };
        let isAble = true;

        for (const char of word) {
            if (!data[char]) {
                isAble = false;
                break;
            } else data[char] = false;
        }

        if (isAble) return 1;
    }

    return 2;
};
