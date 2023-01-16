// Lv. 1 신고 결과 받기

/**
 *
 * @param {string[]} id_list
 * @param {string[]} report
 * @param {number} k
 * @returns {number[]}
 */

function solution(id_list, report, k) {
    const answer = [];
    const reported = {},
        mailing = {};
    const uniqueList = new Set(report);

    for (elem of id_list) {
        reported[elem] = [];
        mailing[elem] = 0;
    }

    for (elem of uniqueList) {
        const temp = elem.split(" ");
        reported[temp[1]].push(temp[0]);
    }

    for (elem in reported) {
        if (reported[elem].length >= k) {
            for (el of reported[elem]) mailing[el]++;
        }
    }

    for (elem in mailing) answer.push(mailing[elem]);

    return answer;
}
