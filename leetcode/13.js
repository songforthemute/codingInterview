// 13. Roman to Integer
const romanToInt = (s) => {
    let result = 0;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
        const current = roman[s[i]];
        let next = 0;
        if (s[i + 1]) next = roman[s[i + 1]];

        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
};
