// Lv. 1 개인정보 수집 유효기간

/**
 * @param {string} today 오늘 날짜를 의미하는 문자열
 * @param {string[]} terms 약관의 유효기간을 담은 문자열 배열
 * @param {string[]} privacies 수집된 개인정보의 정보를 담은 1차원 문자열 배열
 * @returns {number[]}
 */

const solution = (today, terms, privacies) => {
    const result = [];
    const limit = {};

    for (const t of terms) {
        const kind = t.split(" ");
        const stdDate = new Date(today);
        limit[kind[0]] = stdDate.setMonth(stdDate.getMonth() - Number(kind[1]));
    }

    const data = privacies.map((v) => {
        const splitedV = v.split(" ");
        return [new Date(splitedV[0]).getTime(), splitedV[1]];
    });

    for (let i = 0; i < data.length; i++) {
        if (data[i][0] <= limit[data[i][1]]) result.push(i + 1);
    }

    return result;
};
