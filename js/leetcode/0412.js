// 412. Fizz Buzz
const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let buffer = "";
        if (i % 3 === 0) buffer += "Fizz";
        if (i % 5 === 0) buffer += "Buzz";
        if (i % 3 !== 0 && i % 5 !== 0) buffer += i;
        result.push(buffer);
    }

    return result;
};
