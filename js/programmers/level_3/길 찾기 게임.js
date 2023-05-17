// Lv. 3 길 찾기 게임

/**
 * @param {[number, number][]} nodeinfo 이진트리를 구성하는 각 노드의 좌표가 1번 노드부터 순서대로 들어있는 2차원 배열nfo
 * @returns {number[][]} 노드들로 구성된 이진트리를 전위 순회, 후위 순회한 결과를 2차원 배열에 순서대로 담아 return
 */

const solution = (nodeinfo) => {
    class Node {
        constructor(x, y, value) {
            this.x = x;
            this.y = y;
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BST {
        constructor() {
            this.root = null;
        }

        add(x, y, val) {
            let newNode = new Node(x, y, val);

            // initial state
            if (!this.root) {
                this.root = newNode;
                return this;
            }

            // existed nodes in BST
            let current = this.root;

            while (true) {
                // current's x bigger than newNode's x => left side
                if (x < current.x) {
                    // check already exist other leaf node
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        return this;
                    }
                }
                // current's x smaller than newNode's x => right side
                else if (x > current.x) {
                    // check already exist other leaf node
                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        return this;
                    }
                }
            }
        }

        search(method = "pre") {
            const data = [];

            let current = this.root;
            let traversal;

            if (method === "pre") {
                traversal = (node) => {
                    data.push(node.value);
                    if (node.left) traversal(node.left);
                    if (node.right) traversal(node.right);
                };
            } else {
                traversal = (node) => {
                    if (node.left) traversal(node.left);
                    if (node.right) traversal(node.right);
                    data.push(node.value);
                };
            }

            traversal(current);
            return data;
        }
    }

    const bst = new BST();

    nodeinfo
        .map((v, i) => [...v, i + 1]) // memory original index
        .sort(([x1, y1], [x2, y2]) => (y2 !== y1 ? y2 - y1 : x2 - x1)) // sort desc by y || x
        .forEach((v) => bst.add(...v)); // add elements

    return [bst.search("pre"), bst.search("post")];
};

// test cases
console.log(
    solution([
        [5, 3],
        [11, 5],
        [13, 3],
        [3, 5],
        [6, 1],
        [1, 3],
        [8, 6],
        [7, 2],
        [2, 2],
    ])
); // [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
