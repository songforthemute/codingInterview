// Lv.2 이진 변환 반복하기

/**
 * @param {string} s
 * @returns {number[]}
 */

function solution(s) {
    let count = 0;
    let zeroCount = 0;
    let target = s;
    let reservedOne;

    do {
        reservedOne = target.split("").filter((v) => v === "1");
        zeroCount += target.length - reservedOne.length;
        target = reservedOne.length.toString(2);
        count++;
    } while (reservedOne !== ["1"] && reservedOne.length !== 1);

    return [count, zeroCount];
}
