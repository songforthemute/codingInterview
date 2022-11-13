// Lv. 0 공 던지기

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */

const solution = (numbers, k) => {
    if (k === 1) return numbers[0];

    let turn = 1;
    let pointer = 0;

    while (turn !== k) {
        pointer += 2;

        if (pointer > numbers.length - 1) {
            pointer -= numbers.length;
        }

        turn++;
    }

    return numbers[pointer];
};
