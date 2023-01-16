// Lv. 3 불량 사용자

/**
 * @param {string[]} user_id 이벤트 응모자 아이디 목록이 담긴 배열
 * @param {string[]} banned_id 불량 사용자 아이디 목록이 담긴 배열
 * @returns {number} 당첨에서 제외되어야 할 제재 아이디 목록이 가능한 경우의 수
 */

const solution = (user_id, banned_id) => {
    const set = new Set();
    const banIds = banned_id.map((bid) =>
        user_id.filter((uid) => {
            if (uid.length !== bid.length) return false;

            for (let i = 0; i < uid.length; i++) {
                if (bid[i] === "*") continue;
                if (uid[i] !== bid[i]) return false;
            }

            return true;
        })
    );

    const DFS = (arr = [], idx = 0) => {
        if (idx === banned_id.length) {
            set.add(arr.sort().join(""));
            return;
        }

        for (const bid of banIds[idx]) {
            if (arr.includes(bid)) continue;
            else DFS([...arr, bid], idx + 1);
        }
    };

    DFS();

    return set.size;
};

// 테스트케이스
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "abc1**"]
    )
); // 2
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["*rodo", "*rodo", "******"]
    )
); // 2
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "*rodo", "******", "******"]
    )
); // 3
console.log(solution(["frido", "frodo"], ["fr*do", "fr**o"])); // 1
