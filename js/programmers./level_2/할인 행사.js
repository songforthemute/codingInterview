// Lv. 2 할인 행사

/**
 * @param {string[]} want 정현이가 원하는 제품을 나타내는 문자열 배열
 * @param {number[]} number 정현이가 원하는 제품의 수량을 나타내는 정수 배열
 * @param {string[]} discount XYZ 마트에서 할인하는 제품을 나타내는 문자열 배열
 * @return {number} 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원 등록 날짜의 총 일수
 */

const solution = (want, number, discount) => {
    const needsCount = number.reduceRight((prev, curr) => prev + curr);
    const boughtList = {};
    const wantList = {};
    want.forEach((v, i) => (wantList[v] = number[i]));

    let i = 0;

    while (i !== needsCount) {
        boughtList[discount[i]]
            ? boughtList[discount[i++]]++
            : (boughtList[discount[i++]] = 1);
    }

    const isEqual = (obj = {}) => {
        for (const key of Object.keys(wantList)) {
            if (!obj[key] || wantList[key] !== obj[key]) {
                return false;
            }
        }

        return true;
    };

    let slidingPointer = 0;
    let result = 0;

    while (i <= discount.length) {
        if (isEqual(boughtList)) {
            result++;
        }

        boughtList[discount[slidingPointer++]]--;
        boughtList[discount[i]]
            ? boughtList[discount[i++]]++
            : (boughtList[discount[i++]] = 1);
    }

    return result;
};
