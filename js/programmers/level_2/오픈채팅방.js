// Lv. 2 오픈채팅방

/**
 *
 * @param {string[]} record
 * @returns {string[]}
 */

function solution(record) {
    const arr = [];
    const table = {};
    for (const elem of record) arr.push(elem.split(" "));
    for (const elem of arr) {
        if (elem[0] !== "Leave") {
            if (!table[elem[1]]) table[elem[1]] = elem[2];
            else table[elem[1]] = elem[2];
        }
    }

    const result = [];
    for (const elem of arr) {
        if (elem[0] === "Enter")
            result.push(`${table[elem[1]]}님이 들어왔습니다.`);
        else if (elem[0] === "Leave")
            result.push(`${table[elem[1]]}님이 나갔습니다.`);
    }

    return result;
}
