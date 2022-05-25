// 1342. Number of Steps to Reduce a Number to Zero
const numberOfSteps = (num) => {
    let input = num;
    let count = 0;

    while (input !== 0) {
        if (input % 2 === 0) input /= 2;
        else input -= 1;

        count++;
    }

    return count;
};
