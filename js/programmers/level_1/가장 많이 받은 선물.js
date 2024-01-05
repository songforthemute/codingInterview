// Lv.1 가장 많이 받은 선물

/**
 *
 * @param {string[]} friends 친구들의 이름을 담은 1차원 문자열 배열
 * @param {string[]} gifts 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 배열
 * @returns 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수
 */
function solution(friends, gifts) {
    const keyMap = {};
    const valueArr = [];

    for (let i = 0; i < friends.length; i++) {
        keyMap[friends[i]] = i;
        valueArr[i] = Array.from({ length: friends.length }, () => 0);
    }

    for (let i = 0; i < gifts.length; i++) {
        const [giver, receiver] = gifts[i].split(" ");
        valueArr[keyMap[giver]][keyMap[receiver]]++;
        valueArr[keyMap[receiver]][keyMap[giver]]--;
    }

    const giftScore = Array.from({ length: friends.length }, () => 0);
    let nextMaximum = 0;

    for (let i = 0; i < friends.length; i++) {
        giftScore[i] = valueArr[keyMap[friends[i]]].reduce(
            (acc, cur) => acc + cur,
            0
        );
    }

    for (let i = 0; i < friends.length; i++) {
        nextMaximum = Math.max(
            nextMaximum,
            valueArr[keyMap[friends[i]]].reduce((acc, cur, idx) => {
                if (i === idx) return acc;
                if (cur !== 0) return acc + (cur > 0 ? 1 : 0);
                if (giftScore[i] > giftScore[idx]) return acc + 1;
                return acc;
            }, 0)
        );
    }

    return nextMaximum;
}

// TEST CASES
console.log(
    solution(
        ["muzi", "ryan", "frodo", "neo"],
        [
            "muzi frodo",
            "muzi frodo",
            "ryan muzi",
            "ryan muzi",
            "ryan muzi",
            "frodo muzi",
            "frodo ryan",
            "neo muzi",
        ]
    )
); // 2
