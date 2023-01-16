// Lv. 1 크기가 작은 부분 문자열

/**
 * @param {string} t
 * @param {string} p
 * @return {number}
 */

const solution = (t, p) => {
    let result = 0;

    const target = Number(p);
    const len = p.length;

    t.split("").forEach((_, i) => {
        let temp = "";
        let index = i;

        while (temp.length < len && index < t.length) {
            temp += t[index++];
        }

        if (temp.length === len && Number(temp) <= target) {
            result++;
        }
    });

    return result;
};
