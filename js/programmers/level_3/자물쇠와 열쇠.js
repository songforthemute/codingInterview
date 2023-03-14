// Lv. 3 자물쇠와 열쇠

/**
 * @param {number[][]} key 열쇠를 나타내는 2차원 배열 key
 * @param {number[][]} lock 자물쇠를 나타내는 2차원 배열 lock
 * @returns {boolean} 열쇠로 자물쇠를 열수 있는가에 대한 여부
 */

const solution = (key, lock) => {
    const LOCK_LEN = lock.length;
    const KEY_LEN = key.length;
    const BOARD_LEN = KEY_LEN * 2 + LOCK_LEN - 2;

    // initialize board: KEY | BOARD | KEY
    const board = Array.from(Array(BOARD_LEN), () =>
        Array(BOARD_LEN).fill(null)
    );

    // set `lock` in center of board
    for (let i = KEY_LEN; i < KEY_LEN + LOCK_LEN; i++) {
        for (let j = KEY_LEN; j < KEY_LEN + LOCK_LEN; j++) {
            board[i - 1][j - 1] = lock[i - KEY_LEN][j - KEY_LEN];
        }
    }

    // rotate 90'
    const rotateKey = (key = [[]]) => {
        const temp = Array.from(Array(KEY_LEN), () => Array(KEY_LEN).fill(0));

        for (let i = 0; i < KEY_LEN; i++) {
            for (let j = 0; j < KEY_LEN; j++) {
                temp[i][j] = key[KEY_LEN - 1 - j][i];
            }
        }

        return temp;
    };

    // check possibility that solve
    const isPossible = (board = [[]]) => {
        for (let i = KEY_LEN - 1; i < KEY_LEN + LOCK_LEN - 1; i++) {
            for (let j = KEY_LEN - 1; j < KEY_LEN + LOCK_LEN - 1; j++) {
                if (board[i][j] !== 1) return false;
            }
        }

        return true;
    };

    // if `lock` is full of 1
    if (isPossible(board)) return true;

    let currentKey = key;

    //  4 chances: 0', 90', 180', 270'
    for (let lot = 0; lot < 4; lot++) {
        currentKey = rotateKey(currentKey);

        // move rotated key on board during check possibility
        for (let r = 0; r < BOARD_LEN; r++) {
            for (let c = 0; c < BOARD_LEN; c++) {
                const currentBoard = Array.from(board, (row) => [...row]);

                // add currentKey elements to currentBoard
                for (let keyR = 0; keyR < KEY_LEN; keyR++) {
                    for (let keyC = 0; keyC < KEY_LEN; keyC++) {
                        // if range is exceeded
                        if (keyR + r >= BOARD_LEN || keyC + c >= BOARD_LEN)
                            continue;

                        currentBoard[keyR + r][keyC + c] +=
                            currentKey[keyR][keyC];
                    }
                }

                // check
                if (isPossible(currentBoard)) return true;
            }
        }
    }

    return false;
};

// test cases
console.log(
    solution(
        [
            [0, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
        ],
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ]
    )
); // true
console.log(
    solution(
        [
            [0, 0, 0],
            [1, 0, 1],
            [0, 1, 1],
        ],
        [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 0, 1],
            [1, 1, 1, 0],
        ]
    )
); // true
