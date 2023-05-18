// Lv. 0 왼쪽 오른쪽

/**
 * @param {string[]} str_list 문자열 리스트
 * @returns {string[]} str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return
 */

const solution = (str_list) => {
    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === "r") return str_list.slice(i + 1);
        else if (str_list[i] === "l") return str_list.slice(0, i);
    }

    return [];
};

// test cases
console.log(solution(["u", "u", "l", "r"])); // ["u","u"]
console.log(solution(["l"])); // []
