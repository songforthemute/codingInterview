// 2904. Shortest and Lexciographically Smallest Beautiful String

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    /**
     * 문자열 s에 포함된 "1"의 개수가 k개면 아름다운 문자열.
     * 사전 순으로 가장 빠른 문자열.
     */

    const inspect = (str = "") => {
        const count = str.split("").filter(v => v !== '0').length;

        if (count > k) return 1;
        else if (count === k) return 0;
        else return -1;
    }

    const compare = (a = "", b = "") => {
        if (!a) return b;
        if (!b) return a;

        if (a.length !== b.length) {
            return a.length > b.length ? b : a;
        }

        return a > b ? b : a;
    }

    let left = 0;
    let right = 1;
    let result = "";

    while (left < s.length && right <= s.length) {
        const current = s.slice(left, right);
        const inspected = inspect(current);

        if (inspected === 0) {
            result = compare(result, current);
        }

        if (inspected >= 0) {
            left++;
        }

        if (inspected < 0) {
            if (right < s.length) right++;
            else left++;
        }
    }

    return result;
};

// Test cases
console.log(
    shortestBeautifulSubstring(
        "100011001", 3 // "11001"
    )
)

console.log(
    shortestBeautifulSubstring(
        "1011", 2 // "11"
    )
)

console.log(
    shortestBeautifulSubstring(
        "000", 1 // ""
    )
)