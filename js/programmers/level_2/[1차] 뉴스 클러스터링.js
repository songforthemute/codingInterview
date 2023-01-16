// Lv. 2 [1차] 뉴스 클러스터링

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */

function solution(str1, str2) {
    let arr1 = [];
    let arr2 = [];

    const refining = (char) => {
        let code = char.charCodeAt(0);
        if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
            return true;
        }
        return false;
    };

    let i = 0;
    while (i !== str1.length) {
        if (str1[i + 1] && refining(str1[i]) && refining(str1[i + 1])) {
            let val = (str1[i] + str1[i + 1]).toLowerCase();
            arr1.push(val);
        }
        i++;
    }

    i = 0;
    while (i !== str2.length) {
        if (str2[i + 1] && refining(str2[i]) && refining(str2[i + 1])) {
            let val = (str2[i] + str2[i + 1]).toLowerCase();
            arr2.push(val);
        }
        i++;
    }

    let set = new Set([...arr1, ...arr2]);
    let uni = 0,
        inter = 0;

    for (const bite of set) {
        const arr1__count = arr1.filter((x) => x === bite).length;
        const arr2__count = arr2.filter((x) => x === bite).length;
        uni += Math.max(arr1__count, arr2__count);
        inter += Math.min(arr1__count, arr2__count);
    }
    // 합집합이 0인 경우 코너케이스
    return uni === 0 ? 65536 : Math.floor((inter / uni) * 65536);
}
