// 191. Number of 1 Bits
function hammingWeight(n) {
    let copy = n;
    let sum = 0;

    while (copy) {
        sum += copy & 1;
        copy = copy >>> 1;
    }

    return sum;
}
