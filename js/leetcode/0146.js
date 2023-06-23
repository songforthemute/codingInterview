// 146. LRU Cache - Medium

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // renew key-value
    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // if already recoded the key, renew it
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }

    this.cache.set(key, value);

    // delete the oldest data by using the Iterator of Map
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
