// 383. Ransom Note
const canConstruct = (ransomNote, magazine) => {
    const obj = {};

    for (const char of ransomNote) obj[char] ? obj[char]++ : (obj[char] = 1);
    for (const char of magazine) obj[char] && obj[char]--;
    for (const elem in obj) if (obj[elem] !== 0) return false;

    return true;
};
