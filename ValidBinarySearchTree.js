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
      let a = this.check(removed.val);
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
    //   let finalResult = [];
    //   for (let i = 0; i < result.length; i++) {
    //     finalResult.push(result[i].val);
    //   }
    //   return finalResult;
  }
  check(val) {
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
    if (b) {
      return true;
    } else {
      return false;
    }
  }
}
let tri = new BST();
let newNode = new Node(15);
tri.head = newNode;
let newNode2 = new Node(5);
tri.head.left = newNode2;
let newNode3 = new Node(25);
tri.head.right = newNode3;
let newNode4 = new Node(12);
tri.head.left.left = newNode4;
let newNode5 = new Node(10);
tri.head.left.right = newNode5;
let newNode6 = new Node(17);
tri.head.right.left = newNode6;
console.log(tri);

// tri.head.left = 5;
// tri.head.right = 25;
// tri.head.left.left = 2;
// tri.head.left.right = 10;
// tri.head.right.left = 17;
// tri.head.right.right = 35;
console.log(tri.traverseBradthFirst());
