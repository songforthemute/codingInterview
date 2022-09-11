// 326. Power of Three
const isPowerOfThree = (n) => {
    if (n === 1) return true;
    if (n < 3) return false;

    return Number.isInteger((Math.log(n) / Math.log(3)).toFixed(10) - 0)
        ? true
        : false;
};

console.log(isPowerOfThree(9));
