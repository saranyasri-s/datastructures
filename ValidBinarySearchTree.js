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
  // while breadth wise traversing the tree provided,checking whether each number is in the correct position of a binary search tree
  traverseBreadthFirstAndCheckValidity() {
    let q = [];
    let result = [];
    if (!this.head) {
      return null;
    }
    q.push(this.head);
    while (q.length) {
      let removed = q.shift();
      result.push(removed);
      let a = this.checkValidity(removed.val);
      if (!a) {
        return false;
      } else {
        if (removed.left) {
          q.push(removed.left);
        }
        if (removed.right) {
          q.push(removed.right);
        }
      }
    }
    return true;
  }
  checkValidity(val) {
    let current = this.head;
    function checkValidity(val) {
      if (val === current.val) {
        return true;
      } else if (val < current.val) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
          return checkValidity(val);
        }
      } else if (val > current.val) {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
          return checkValidity(val);
        }
      }
    }
    let b = checkValidity(val);
    return b;
  }
}
let tri = new BST();
let newNode = new Node(15);
tri.head = newNode;
let newNode2 = new Node(5);
tri.head.left = newNode2;
let newNode3 = new Node(25);
tri.head.right = newNode3;
let newNode4 = new Node(2);
tri.head.left.left = newNode4;
let newNode5 = new Node(10);
tri.head.left.right = newNode5;
let newNode6 = new Node(17);
tri.head.right.left = newNode6;
console.log(tri);

console.log(tri.traverseBreadthFirstAndCheckValidity());
