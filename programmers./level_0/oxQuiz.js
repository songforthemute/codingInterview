// Lv. 0 OX퀴즈

/**
 * @param {string[]} quiz
 * @return {string[]}
 */

const solution = (quiz) => {
    const result = [];

    for (const splited of quiz.map((v) => v.split(" "))) {
        if (splited[1] === "+") {
            result.push(
                Number(splited[0]) + Number(splited[2]) === Number(splited[4])
                    ? "O"
                    : "X"
            );
        } else {
            result.push(
                Number(splited[0]) - Number(splited[2]) === Number(splited[4])
                    ? "O"
                    : "X"
            );
        }
    }

    return result;
};
