class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    function checkForInsertion(val) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
          return checkForInsertion(val);
        }
      } else if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
          return checkForInsertion(val);
        }
      }
    }
    checkForInsertion(val);
    return this;
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    function search(val) {
      if (val === current.val) {
        return true;
      } else {
        if (val > current.val) {
          if (!current.right) {
            return false;
          } else {
            current = current.right;
            return search(val);
          }
        } else if (val < current.val) {
          if (!current.left) {
            return false;
          } else {
            current = current.left;
            return search(val);
          }
        }
      }
    }
    let result = search(val);
    return result;
  }
  depthFirstTraversePreOrder() {
    if (!this.root) return null;
    let visited = [];
    let current = this.root;
    function helper(current) {
      visited.push(current.val);
      if (current.left) {
        helper(current.left);
      }
      if (current.right) {
        helper(current.right);
      }
    }
    helper(current);
    return visited;
  }
  depthFirstTraverseInOrder() {
    if (!this.root) return null;
    let visited = [];
    let current = this.root;
    function helper(current) {
      if (current.left) {
        helper(current.left);
      }
      visited.push(current.val);
      if (current.right) {
        helper(current.right);
      }
    }
    helper(current);
    return visited;
  }
  depthFirstTraversePostOrder() {
    if (!this.root) return null;
    let visited = [];
    let current = this.root;
    function helper(current) {
      if (current.left) {
        helper(current.left);
      }
      if (current.right) {
        helper(current.right);
      }
      visited.push(current.val);
    }
    helper(current);
    return visited;
  }
}
let tree = new Bst();
console.log(tree);
tree.insert(11);
console.log(tree);
console.log(tree.insert(52));
console.log(tree.insert(7));
console.log(tree.insert(31));
console.log(tree.insert(4));
console.log(tree.insert(100));
console.log(tree.insert(99));
console.log(tree.depthFirstTraversePreOrder());
console.log(tree.depthFirstTraversePostOrder());
console.log(tree.depthFirstTraverseInOrder());
