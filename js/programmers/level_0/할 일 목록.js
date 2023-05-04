// Lv. 0 할 일 목록

/**
 * @param {string[]} todo_list 오늘 해야 할 일이 담긴 문자열 배열
 * @param {boolean[]} finished 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열
 * @returns {string[]} todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열
 */

const solution = (todo_list, finished) => {
    return todo_list.filter((_, i) => !finished[i]);
};

// test cases
console.log(
    solution(
        ["problemsolving", "practiceguitar", "swim", "studygraph"],
        [true, false, true, false]
    )
); // ["practiceguitar", "studygraph"]
