// 2621. Sleep

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Test cases
let t = Date.now();

console.log(
    (() => {
        let t = Date.now();
        sleep(100).then(() => {
            console.log(Date.now() - t); // 100
        })
    })()
)

console.log(
    (() => {
        let t = Date.now();
        sleep(200).then(() => {
            console.log(Date.now() - t); // 200
        })
    })()
)