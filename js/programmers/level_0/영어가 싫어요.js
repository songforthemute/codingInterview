// Lv. 0 영어가 싫어요

/**
 * @param {string} numbers
 * @return {number}
 */

const solution = (number) => {
    let result = "";
    let temp = "";
    let i = 0;
    const dict = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    while (temp.length > 0 || number[i]) {
        temp += number[i];

        if (dict[temp]) {
            result += dict[temp];
            temp = "";
        }

        i++;
    }

    return Number(result);
};
