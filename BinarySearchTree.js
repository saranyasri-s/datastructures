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
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
          return checkForInsertion(val);
        }
      } else {
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
}
let tree = new Bst();
console.log(tree);
tree.insert(11);
console.log(tree);
console.log(tree.insert(5));
console.log(tree.insert(7));
console.log(tree.insert(3));
console.log(tree.insert(4));
console.log(tree.insert(100));
console.log(tree.insert(99));
