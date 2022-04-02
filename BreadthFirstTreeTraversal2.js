class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.head = null;
  }
  add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      function helper(val) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
          } else {
            current = current.left;
            helper(val);
          }
        } else {
          if (!current.right) {
            current.right = newNode;
          } else {
            current = current.right;
            helper(val);
          }
        }
      }
      helper(val);
    }
    return this.head;
  }

  traverseBradthFirst() {
    let q = [];
    let result = [];
    if (!this.head) {
      return null;
    }
    q.push(this.head);
    while (q.length) {
      let removed = q.shift();
      result.push(removed);
      if (removed.left) {
        q.push(removed.left);
      }
      if (removed.right) {
        q.push(removed.right);
      }
    }
    let finalResult = [];
    for (let i = 0; i < result.length; i++) {
      finalResult.push(result[i].val);
    }
    return finalResult;
  }
}
let tree = new BST();
console.log(tree);
tree.add(15);
tree.add(5);
tree.add(25);
tree.add(2);
tree.add(10);
tree.add(17);
console.log(tree);
console.log(tree.traverseBradthFirst());
