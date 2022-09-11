// 344. Reverse String
const reverseString = (s) => {
    let leftIdx = 0,
        rightIdx = s.length - 1;

    while (leftIdx < rightIdx) {
        [s[leftIdx], s[rightIdx]] = [s[rightIdx], s[leftIdx]];

        leftIdx++;
        rightIdx--;
    }

    return s;
};
