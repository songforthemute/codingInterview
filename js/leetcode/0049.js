// 49. Group Anagrams
const groupAnagrams = (strs) => {
    const obj = {};

    for (const s of strs) {
        const chars = [...s].sort();
        obj[chars] ? obj[chars].push(s) : (obj[chars] = [s]);
    }

    return Object.values(obj);
};
