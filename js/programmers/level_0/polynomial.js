// Lv. 0 다항식 더하기

/**
 * @param {string} polynomial
 * @return {string}
 */

const solution = (polynomial) => {
    let variable = 0;
    let integer = 0;

    for (const splited of polynomial.split(" + ")) {
        if (splited[splited.length - 1] === "x") {
            variable +=
                splited.length === 1
                    ? 1
                    : Number(splited.slice(0, splited.length - 1));
        } else {
            integer += Number(splited);
        }
    }

    if (variable === 0) {
        return `${integer}`;
    } else if (integer === 0) {
        return variable === 1 ? "x" : `${variable}x`;
    } else {
        return variable === 1 ? `x + ${integer}` : `${variable}x + ${integer}`;
    }
};
