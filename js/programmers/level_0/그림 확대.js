// Lv. 0 그림 확대

/**
 * @param {string[]} picture 직사각형 형태의 그림 파일을 나타낸 문자열 배열
 * @param {number} k 정수
 * @returns {string[]} 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return
 */

const solution = (picture, k) => {
    return picture
        .map((v) =>
            Array.from(Array(k), () => [...v].map((v) => v.repeat(k)).join(""))
        )
        .flat();
};

// test cases
console.log(
    solution(
        [
            ".xx...xx.",
            "x..x.x..x",
            "x...x...x",
            ".x.....x.",
            "..x...x..",
            "...x.x...",
            "....x....",
        ],
        2
    )
); // ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
