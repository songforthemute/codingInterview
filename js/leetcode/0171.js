// 171. Excel Sheet Column Number
const titleToNumber = (columnTitle) => {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        let char = columnTitle[columnTitle.length - 1 - i];

        result += Math.pow(26, i) * (char.charCodeAt(0) - 64);
    }

    return result;
};
