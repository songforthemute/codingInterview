// Lv. 2 혼자 놀기의 달인

/**
 * @param {number[]} cards 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열
 * @return {number} 이 게임에서 얻을 수 있는 최고 점수
 */

const solution = (cards) => {
    const TOTAL = cards.length;

    const pickBox = (num = 1, picked = {}, pickable = []) => {
        if (picked[num]) {
            return [
                Object.keys(picked).join(""), // picked boxes string for register in dictionary
                pickable.filter((card) => !picked[card]), // pickable next boxes list
            ];
        }

        return pickBox(cards[num - 1], { ...picked, [num]: true }, pickable);
    };

    let max = 0;
    const dict = new Map();

    for (let i = 1; i <= TOTAL; i++) {
        const [picked1, pickable1] = pickBox(i, {}, cards);

        // check if already registered
        if (dict.has(picked1) || !pickable1.length) continue;

        // register this boxes set
        dict.set(picked1, true);

        // get 2nd boxes from pickable
        pickable1.forEach((nth) => {
            const [, pickable2] = pickBox(nth, {}, pickable1);

            max = Math.max(
                max,
                (TOTAL - pickable1.length) *
                    (pickable1.length - pickable2.length)
            );
        });
    }

    return max;
};

// test cases
console.log(solution([8, 6, 3, 7, 2, 5, 1, 4])); // 12
console.log(solution([10, 8, 6, 3, 7, 2, 5, 1, 4, 9])); // 16
