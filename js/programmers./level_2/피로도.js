// Lv. 2 피로도

/**
 * @param {number} k
 * @param {number[][]} dungeons
 * @returns {number}
 */

function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let count = 0;

    const DFS = (tiredness, currCount) => {
        if (count < currCount) count = currCount;

        for (let i = 0; i < dungeons.length; i++) {
            const [required, used] = dungeons[i];

            if (tiredness >= required && !visited[i]) {
                visited[i] = true;

                DFS(tiredness - used, currCount + 1);

                visited[i] = false;
            }
        }
    };

    DFS(k, 0);

    return count;
}
