// 8. String to Integer(atoi)
function myAtoi(s: string): number {
    const toNum = parseInt(s);

    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = (-2) ** 31;

    if (!toNum) return 0;
    else if (toNum > MAX_INT) return MAX_INT;
    else if (toNum < MIN_INT) return MIN_INT;
    else return toNum;
}
