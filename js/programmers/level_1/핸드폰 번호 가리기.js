// Lv. 1 핸드폰 번호 가리기

/**
 *
 * @param {string} phone_number
 * @returns {string}
 */

function solution(phone_number) {
    let answer = "";
    const { length } = phone_number;

    for (let i = 0; i < length - 4; i++) answer += "*";

    answer += phone_number.slice(length - 4);

    return answer;
}
