// Lv. 2 [3차] 압축

/**
 * @param {string} msg 영문 대문자로만 이뤄진 문자열
 * @return {number[]} 주어진 문자열을 압축한 후의 사전 색인 번호 배열
 */

function solution(msg) {
    const result = [];
    const hash = {};

    // init index for hash
    (function init() {
        for (let i = 1; i <= 26; i++) {
            hash[String.fromCharCode(i + 64)] = i;
        }
    })();

    let i = 0;
    let last = 27; // maybe next index for register to hash

    const processing = (chars, idx) => {
        // if current char is exist && if current chars is already registered in hash
        if (msg[idx] && hash[chars + msg[idx + 1]]) {
            // extends range
            return processing(chars + msg[idx + 1], idx + 1);
        }

        // else case
        // appeared non-registered chars
        result.push(hash[chars]);

        // register current chars
        hash[chars + (msg[idx + 1] ?? "_")] = last;

        i = idx + 1; // renew new starting range
        last++; // renew index for next registerable
    };

    // till non-existing valid chars
    while (msg[i]) {
        processing(msg[i], i);
    }

    return result;
}

// test cases
console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); // [1, 2, 27, 29, 28, 31, 30]
