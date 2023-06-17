// 56. Merge Intervals - Medium

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    // sort by ascending for the loop
    intervals.sort(([s1], [s2]) => s1 - s2);

    const result = [intervals[0]];

    // loop through intervals
    for (let i = 1; i < intervals.length; i++) {
        const [prevStart, prevEnd] = result[result.length - 1];
        const [curStart, curEnd] = intervals[i];

        // if previous interval be overlapped with the current interval
        if (curStart <= prevEnd)
            result[result.length - 1] = [prevStart, Math.max(prevEnd, curEnd)];
        else result.push(intervals[i]);
    }

    return result;
};
